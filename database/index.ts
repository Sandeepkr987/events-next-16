
export { default as Event } from './event.model';
export { default as Booking } from './booking.model';


export type { IEvent } from './event.model';
export type { IBooking } from './booking.model';

// EventSchema.pre('save', function (next) {
//   const event = this as IEvent;
//   if (event.isModified('title') || event.isNew) {
//     event.slug = generateSlug(event.title);
//   }

//   if (event.isModified('date')) {
//     event.date = normalizeDate(event.date);
//   }

//   if (event.isModified('time')) {
//     event.time = normalizeTime(event.time);
//   }
//   next();
// });