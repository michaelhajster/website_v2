'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().min(2, "Firmenname muss mindestens 2 Zeichen lang sein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

const inputClasses = "w-full px-4 py-2 rounded-lg border border-black/[.08] dark:border-white/[.24] hover:border-black/[.16] dark:hover:border-white/[.45] bg-white/[.03] dark:bg-white/[.08] focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors text-foreground dark:text-white placeholder:text-foreground/70 dark:placeholder:text-white/70";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Add timestamp to the data
      const submissionData = {
        ...data,
        timestamp: new Date(),
      };

      console.log('Attempting to submit:', submissionData);
      
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "contact_submissions"), submissionData);
      console.log('Document written with ID: ', docRef.id);
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        error instanceof Error 
          ? `Fehler: ${error.message}` 
          : 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className={inputClasses}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-Mail
          </label>
          <input
            {...register("email")}
            type="email"
            className={inputClasses}
            placeholder="ihre@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Unternehmen
          </label>
          <input
            {...register("company")}
            type="text"
            className={inputClasses}
            placeholder="Ihr Unternehmen"
          />
          {errors.company && (
            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Nachricht
          </label>
          <textarea
            {...register("message")}
            rows={4}
            className={inputClasses}
            placeholder="Wie können wir Ihnen helfen?"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
      </div>

      {submitError && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-6 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#0A6DC2] to-[#179FEE] text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 ${
          isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}