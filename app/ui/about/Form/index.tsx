'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
    message: string;
    firstName: string;
    email: string;
    company: string;
};

const DefaultForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            setSubmitting(true);
            setSubmitError('');

            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    firstName: data.firstName,
                    message: data.message,
                    company: data.company,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send email');
            }
            const responseData = await response.json();

            console.log('Email sent successfully:', responseData);

            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitError('Failed to send email. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-3"
        >
            <h2 className="text-4xl">Send a message</h2>
            <p className="text-gray-500">
                Want to start a project? Questions about some of our previous
                work? Send us a message and we&apos;ll get back to you!
            </p>
            <div className="flex flex-col my-3 gap-y-2">
                <textarea
                    placeholder="Message (required)"
                    disabled={submitSuccess}
                    rows={6}
                    cols={40}
                    {...register('message', {
                        required: 'Message is required!',
                    })}
                    className={`${!errors.message ? 'border-[#e5e5e5]' : 'border-red-500'} border-solid border-[1px] py-[1rem] px-2 w-full font-thin`}
                />
                {errors.message && (
                    <p role="alert" className="text-red-500 mb-2">
                        {errors.message.message}
                    </p>
                )}

                <div
                    className={`flex flex-col auto-rows-min md:grid md:grid-cols-2 gap-x-4 gap-y-2`}
                >
                    <input
                        disabled={submitSuccess}
                        placeholder="First Name (required)"
                        {...register('firstName', {
                            required: 'First Name is required!',
                        })}
                        className={`${!errors.firstName ? 'border-[#e5e5e5]' : 'border-red-500'} border-solid border-[1px] py-[1rem] px-2 font-thin w-full`}
                    />
                    <div className="col-start-1 row-start-2 flex h-min">
                        {errors.firstName && (
                            <p role="alert" className="text-red-500 ">
                                {errors.firstName.message}
                            </p>
                        )}
                    </div>

                    <input
                        disabled={submitSuccess}
                        placeholder="Email (required)"
                        {...register('email', {
                            required: 'Please enter your email!',
                        })}
                        className={`${!errors.email ? 'border-[#e5e5e5]' : 'border-red-500'} border-solid border-[1px] py-[1rem] px-2 font-thin w-full`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />

                    <div className="col-start-2 row-start-2 flex h-min">
                        {errors.email && (
                            <p role="alert" className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <input
                    disabled={submitSuccess}
                    placeholder="Company (optional)"
                    {...register('company')}
                    className="border-[#e5e5e5] border-solid border-[1px] py-[1rem] px-2 w-full font-thin"
                />
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                <input
                    className={`lowercase border-[1px] border-solid border-transparent py-3 px-6 text-white ${submitSuccess ? 'bg-slate-300' : 'bg-[#212121] cursor-pointer'} w-fit`}
                    type="submit"
                    disabled={submitting || submitSuccess}
                    value={submitting ? 'Submitting...' : 'Submit'}
                />
            </div>
            {submitSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500"
                >
                    Email submitted successfully!
                </motion.div>
            )}
            {submitError && <div className="text-red-500">{submitError}</div>}
        </form>
    );
};

export default DefaultForm;
