import React, { useState } from "react";

function useSubmitForm<T>(url: string, data: T) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Simulate API call delay and random error
    setTimeout(() => {
      const isError = Math.random() > 0.7;
      if (isError) {
        setError("Failed to submit. Please try again.");
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    }, 2000);
  };

  return { loading, error, success, submitForm };
}

export default useSubmitForm;
