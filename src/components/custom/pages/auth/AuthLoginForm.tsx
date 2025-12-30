"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { InputText } from "../../inputs/InputText";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { AuthStatus } from "@/app/page";

interface Login {
  email: string;
  password: string;
}

export const AuthLoginForm = ({
  setAuthActive,
}: {
  setAuthActive: Dispatch<SetStateAction<AuthStatus>>;
}) => {
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    clearErrors,
    setError,
  } = useForm<Login>();

  const loginMutation = useMutation({
    mutationFn: async (data: Login) => {},
    onSuccess: () => {},
    onError: (error) => {},
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const onSubmit = (data: Login) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <FieldSet>
          <div className="w-full gap-2 flex flex-col">
            <FieldLegend className="text-4xl font-bold text-black">
              Safe Space for everyone
            </FieldLegend>
            <FieldDescription className="text-md font-normal text-neutral-500">
              By clicking Continue to join or sign in, you agree to LinkedIn’s
              User Agreement, Privacy Policy, and Cookie Policy.
            </FieldDescription>
          </div>

          <FieldGroup className="w-full gap-4 flex flex-col">
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email must be filled" }}
                render={({ field }) => (
                  <InputText
                    value={field.value}
                    onChange={field.onChange}
                    type="email"
                  />
                )}
              />
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password must be filled" }}
                render={({ field }) => (
                  <InputText
                    value={field.value}
                    onChange={field.onChange}
                    type="password"
                  />
                )}
              />
            </Field>
          </FieldGroup>
        </FieldSet>

        <Field>
          <Button type="submit" className="font-semibold cursor-pointer">
            Login
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
