import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Manoel</Text>
          <Text color="gray.300" fontSize="small">
            joaomanoeldev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Manoel"
        src="https://github.com/JoaoManoelDev.png"
      />
    </Flex>
  )
}
