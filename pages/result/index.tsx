import { Box, Button, Group, Image, Stack } from "@mantine/core";

export default function ResultPage() {
  return (
    <Stack
      style={{
        flex: 1
      }}
      align="center"
    >
      <Group
      mt={'10%'}
      >
        <Image
          radius="md"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          style={{
            flex: 1,
            height: 400,
            width: 'auto',
            aspectRatio: '4 / 3'
          }}
        />
        <Group
          style={{
            flex: 1
          }}
        >
          <Button>
            Download
          </Button>
        </Group>
      </Group>
    </Stack>
  )
}