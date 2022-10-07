import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import { TwSignUpTemplate } from "src/components/templates/SignUpTemplate/style";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export interface SignUpTemplateProps {
  postData: (
    username: string,
    firstname: string,
    lastname: string,
    email: string
  ) => Promise<void>;
}

const SignUpTemplate: React.FC<SignUpTemplateProps> = ({ postData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const validationRules = {
    name: {
      required: "Required",
      minLength: { value: 1, message: "Name must be longer than 4." },
    },
    // TODO: validations
    email: {
      required: "Required",
    },
    password: {
      required: "Required",
    },
  };

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const { username, firstname, lastname, email } = data;
    postData(username, firstname, lastname, email);
  };

  return (
    <TwSignUpTemplate>
      <Stack
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{ m: 2 }}
      >
        <Controller
          name="username"
          control={control}
          rules={validationRules.name}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="User Name"
              error={errors.username != undefined}
              helperText={errors.username?.message}
            />
          )}
        />
        <Controller
          name="firstname"
          control={control}
          rules={validationRules.name}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="First Name"
              error={errors.firstname != undefined}
              helperText={errors.firstname?.message}
            />
          )}
        />
        <Controller
          name="lastname"
          control={control}
          rules={validationRules.name}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Last Name"
              error={errors.lastname != undefined}
              helperText={errors.lastname?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={validationRules.email}
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              label="Email"
              error={errors.email != undefined}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={validationRules.password}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              error={errors.password != undefined}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button variant="contained" type="submit">
          送信
        </Button>
      </Stack>
    </TwSignUpTemplate>
  );
};

export default SignUpTemplate;
