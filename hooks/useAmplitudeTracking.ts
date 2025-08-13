import { useAmplitude } from "@/components/AmplitudeProvider";

interface EventProperties {
  [key: string]: string | number | boolean;
}

export const useAmplitudeTracking = () => {
  const { track } = useAmplitude();

  const trackPageView = (pageName: string, properties?: EventProperties) => {
    track("Page View", {
      page_name: pageName,
      ...properties,
    });
  };

  const trackButtonClick = (
    buttonName: string,
    properties?: EventProperties
  ) => {
    track("Button Click", {
      button_name: buttonName,
      ...properties,
    });
  };

  const trackNavigation = (
    fromPage: string,
    toPage: string,
    properties?: EventProperties
  ) => {
    track("Navigation", {
      from_page: fromPage,
      to_page: toPage,
      ...properties,
    });
  };

  const trackCustomEvent = (
    eventName: string,
    properties?: EventProperties
  ) => {
    track(eventName, properties);
  };

  const trackUserAction = (action: string, properties?: EventProperties) => {
    track("User Action", {
      action,
      ...properties,
    });
  };

  return {
    trackPageView,
    trackButtonClick,
    trackNavigation,
    trackCustomEvent,
    trackUserAction,
  };
};
