import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const singInFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  password: z.string(),
})

type signInFormData = z.infer<typeof singInFormSchema>

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<signInFormData>({
    resolver: zodResolver(singInFormSchema),
  })

  async function handleFormSignIn(data: signInFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleFormSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
