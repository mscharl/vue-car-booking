import moment from 'moment';

/**
 * This filter always redirects to the `week` view of the current week
 *
 * @param to
 * @param from
 * @param next
 */
export const RedirectToDefault = (to, from, next) => {
    const now = moment();

    next({
        name  : 'week',
        params: {
            year: now.year(),
            week: now.week(),
        },
    });
};

/**
 * This filter validates the given week.
 * If the week is considered invalid it will use the `RedirectToDefault`-Filter
 *
 * @param to
 * @param from
 * @param next
 */
export const ValidateWeek = (to, from, next) => {
    const year = parseInt(to.params.year);
    const week = parseInt(to.params.week);

    const thisYear = moment().year(year);

    if(week <= 0 || week > thisYear.weeksInYear()) {
        RedirectToDefault(from, to, next)
    }
    else {
        next();
    }
};
