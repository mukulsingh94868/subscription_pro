import { createRequire } from 'module';
import Subscription from '../models/subscription.model.js';
import dayjs from 'dayjs';

const require = createRequire(import.meta.url);

const { serve } = require('@upstash/workflow/express');

const REMAINDER = [7, 5, 2, 1];

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);
    if (!subscription || subscription.status !== 'active') return;

    const renewalDate = dayjs(subscription.renewalDate);
    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal data has passed for subscription ${subscriptionId}. Stopping Worflow.`);
        return;
    }

    for (const daysBefore of REMAINDER) {
        const reminderDate = renewalDate.subtract(daysBefore, 'day');
        if (reminderDate.isAfter(dayjs())) {
            console.log(`Sending reminder for subscription ${subscriptionId} in ${daysBefore} days.`);
            await sleepUntilReminder(context, `Reminder ${daysBefore} days before`, reminderDate);
        }
        await triggerRemainder(context, `Reminder ${daysBefore} days before`);
    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async () => {
        return Subscription.findById(subscriptionId).populate('user', 'name email');
    })
};

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}.`);
    await context.sleepUntil(label, date.toDate(date));
};

const triggerRemainder = async (context, label) => {
    return await context.run(label, () => {
        console.log(`Triggering ${label} reminder.`)
        // send sms, email, push notifications...
    })
};