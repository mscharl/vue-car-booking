import { Booking } from '../types/Booking';

const BOOKING_MINUTE_SNAP = 15;

export function createFromNothing(now: Date = new Date(), durationInMinutes: number = 60): Booking {
    const startDate    = new Date(now);
    const startMinutes = Math.ceil((startDate.getMinutes() + 1) / BOOKING_MINUTE_SNAP) * BOOKING_MINUTE_SNAP;

    startDate.setMinutes(startMinutes, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMinutes(startMinutes + durationInMinutes, 0, 0);

    return {
        starts_at: startDate,
        ends_at  : endDate,
    };
}
