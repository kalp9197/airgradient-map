/**
 * Centralized module for exporting application constants.
 *
 * This file serves as an index for all constants used throughout the application.
 *
 * - Place all application constants in this directory for better organization.
 * - Use this index file to import constants from other files in the constants directory.
 *
 * Example usage:
 *
 * import { SOME_CONSTANT } from '~/constants';
 *
 * This approach allows for cleaner imports and better maintainability of constant values.
 *
 * Ensure that any new constants are added to their respective files and re-exported here
 * for consistent access across the application.
 */

export * from './map';
export * from './shared';
