import { notifications } from "@mantine/notifications";
import { UseFormReturnType } from "@mantine/form";
import { useState } from "react";

import { toHtml } from "../utilities";
import axios from "axios";

export function useHandleSubmit<
  Values extends Record<string, any>,
  Form extends UseFormReturnType<Values> = UseFormReturnType<Values>
>(form: Form) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: Values) => {
    setLoading(true);

    const { file } = values;
    if (file) {
      const reader = new FileReader();
      reader.onload = function (data) {
        if (data.target) {
          const binaryFile = data.target.result;

          const payload = {
            BinaryContent: binaryFile,
            Name: file.name,
            ContentType: file.type,
          };

          fetch("/api/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
        }
      };
      reader.readAsBinaryString(file);
    }

    axios("/api/email", {
      method: "POST",
      data: toHtml(values),
      headers: { "Content-Type": "application/json-patch+json" },
    })
      .then(() => {
        form.reset();
        setLoading(false);
        notifications.show({
          title: "Successful",
          message: "Email sent successfully",
          styles: {
            root: {
              "::before": {
                backgroundColor: "#8300EB",
              },
            },
          },
        });
      })
      .catch(() => {
        setLoading(false);
        notifications.show({
          title: "Error occured",
          message: "Unable to send email",
          styles: {
            root: {
              "::before": {
                backgroundColor: "#FF7070",
              },
            },
          },
        });
      });
  };

  return {
    submit: handleSubmit,
    loading,
  };
}
