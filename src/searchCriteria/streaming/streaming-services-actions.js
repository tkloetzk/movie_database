import UPDATE_STREAMING_SERVICES from './streaming-services-action-types';

export const updateStreamingSelections = services => ({
  type: UPDATE_STREAMING_SERVICES,
  services
});
