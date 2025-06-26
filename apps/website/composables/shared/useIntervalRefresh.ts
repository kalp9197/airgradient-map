import { readonly } from 'vue';
import { onUnmounted, ref } from 'vue';

export function useIntervalRefresh<T>(
  refreshFunction: () => Promise<T>,
  interval: number,
  options?: {
    onError?: (error: Error) => void;
    onSuccess?: () => void;
    skipFirstRefresh?: boolean;
    skipOnVisibilityHidden?: boolean;
  }
) {
  const isRefreshIntervalActive = ref(false);
  const intervalRef = ref<NodeJS.Timeout | null>(null);

  const refresh = async () => {
    if (
      !isRefreshIntervalActive.value ||
      (options?.skipOnVisibilityHidden && document.visibilityState !== 'visible')
    ) {
      return;
    }

    try {
      refreshFunction();
      options?.onSuccess?.();
    } catch (error) {
      options?.onError?.(error as Error);
    }
  };

  const resetIntervalDuration = (duration: number) => {
    stopRefreshInterval();
    interval = duration;
    startRefreshInterval();
  };

  const startRefreshInterval = () => {
    if (isRefreshIntervalActive.value) return;
    isRefreshIntervalActive.value = true;

    if (!options?.skipFirstRefresh) {
      refresh();
    }

    intervalRef.value = setInterval(refresh, interval);
  };

  const stopRefreshInterval = () => {
    isRefreshIntervalActive.value = false;
    if (intervalRef.value) {
      clearInterval(intervalRef.value);
      intervalRef.value = null;
    }
  };

  onUnmounted(() => stop());

  return {
    isRefreshIntervalActive: readonly(isRefreshIntervalActive),
    startRefreshInterval,
    stopRefreshInterval,
    refresh,
    resetIntervalDuration
  };
}
