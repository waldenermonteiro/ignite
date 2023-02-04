import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/Form/Input";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve conter no mínimo 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function UserCreate() {
  const { register, handleSubmit, formState } = useForm<CreateUserData>({
    resolver: yupResolver(createUserSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserData> = async (values) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  };

  return (
    <Box>
      <Header />

      <Flex w={"100%"} my="6" maxWidth={1480} mx="auto" px={"6"} onSubmit={handleSubmit(handleCreateUser)}>
        <Sidebar />
        <Box as="form"  flex={"1"} borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size={"lg"} fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my={"6"} borderColor="gray.700" />
          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
              <Input
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w={"100%"}>
              <Input
                label="Senha"
                type={"password"}
                error={errors.password}
                {...register("password")}
              />
              <Input
                label="Confirmação da senha"
                type={"password"}
                error={errors.passwordConfirmation}
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={"8"} justify="flex-end">
            <HStack spacing={"4"}>
              <Link href={"/users"}>
                <Button  colorScheme={"whiteAlpha"}>Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme={"pink"} isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
