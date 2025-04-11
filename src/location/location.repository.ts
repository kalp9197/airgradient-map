import { Injectable, NotFoundException } from "@nestjs/common";
import DatabaseService from "src/database/database.service";
import LocationEntity from "./location.entity";

@Injectable()
class LocationRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async retrieveLocations(
    offset: number = 0,
    limit: number = 100,
  ): Promise<LocationEntity[]> {
    const query = `
            SELECT
                l.id AS "locationId",
                l.location_name AS "locationName",
                ST_X(l.coordinate) AS longitude,
                ST_Y(l.coordinate) AS latitude,
                o.id AS "ownerId",
                o.owner_name AS "ownerName",
                o.owner_name_display AS "ownerNameDisplay",
                o.description,
                o.url,
                l.sensor_type AS "sensorType",
                l.licenses,
                l.provider,
                l.data_source AS "dataSource",
                l.timezone
            FROM 
                location l
            JOIN
                owner o ON l.owner_id = o.id
            ORDER BY 
                l.id
            OFFSET $1 LIMIT $2; 
        `;

    const results = await this.databaseService.runQuery(query, [offset, limit]);

    return results.rows.map(
      (location: Partial<LocationEntity>) => new LocationEntity(location),
    );
  }

  async retrieveLocationById(id: number): Promise<LocationEntity> {
    const query = `
            SELECT
                l.id AS "locationId",
                l.location_name AS "locationName",
                ST_X(l.coordinate) AS longitude,
                ST_Y(l.coordinate) AS latitude,
                o.id AS "ownerId",
                o.owner_name AS "ownerName",
                o.owner_name_display AS "ownerNameDisplay",
                o.description,
                o.url,
                l.sensor_type AS "sensorType",
                l.licenses,
                l.provider,
                l.data_source AS "dataSource",
                l.timezone
            FROM 
                location l
            JOIN
                owner o ON l.owner_id = o.id
            WHERE
                l.id = $1;
        `;

    const result = await this.databaseService.runQuery(query, [id]);

    const location = result.rows[0];
    if (!location) {
      throw new NotFoundException();
    }

    return new LocationEntity(location);
  }

  async retrieveLastMeasuresByLocationId(id: number) {
    const query = `
            SELECT 
                location_id AS "locationId",
                pm25,
                pm10,
                atmp,
                rhum,
                rco2,
                o3,
                no2,
                measured_at AS "measuredAt"
            FROM measurement
            WHERE location_id = $1
            ORDER BY measured_at DESC 
            LIMIT 1;
        `;

    const result = await this.databaseService.runQuery(query, [id]);

    const lastMeasurements = result.rows[0];
    if (!lastMeasurements) {
      throw new NotFoundException();
    }

    return lastMeasurements;
  }

  async retrieveLocationMeasuresHistory(
    id: number,
    start: string,
    end: string,
    bucketSize: string,
    measure: string,
  ) {
    const query = `
            SELECT 
                date_bin($4, m.measured_at, $2) AS timebucket,
                round(avg(m.${measure})::NUMERIC , 2) AS value
            FROM measurement m 
            WHERE 
                m.location_id = $1 AND 
                m.measured_at BETWEEN $2 AND $3
            GROUP BY timebucket
            ORDER BY timebucket;
        `;

    const results = await this.databaseService.runQuery(query, [
      id,
      start,
      end,
      bucketSize,
    ]);

    return results.rows;
  }
}

export default LocationRepository;
