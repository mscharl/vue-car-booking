const _ = (key: string): string => `bookings/${key}`;

export const CREATE_NEW_BOOKING  = _('createNewBooking');
export const DISMISS_NEW_BOOKING = _('dismissNewBooking');
