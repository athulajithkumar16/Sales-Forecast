import { Button, Center, Group, Stack, Text, Title } from "@mantine/core";
import { FileUploader } from "../components/FileUploader/FileUploader";
import { useRouter } from "next/router";

export default function IndexPage() {
  return (
    <Center
      h={'100%'}
      style={{
        flex: 1
      }}
    >
      <Stack
        maw={1200}
        justify="center"
      >
        <HomePage />
      </Stack>
    </Center>
  );
}

function HomePage() {
  const router = useRouter();
  function handleSubmitClick() {
    router.push('/result')
  }
  return (
    <Group
      align="start"
    >
      <Stack
        style={{
          flex: 1
        }}
        gap={'46px'}
      >
        <Title>
          Sales Forecasting Software
        </Title>
        <Text>
          Sales forecasting helps you to estimate your revenue and optimize your sales performance. Take accurate and informed decisions to avoid shortcomings and increase your sales growth. Use Sales forecasting software to boost your sales performance.
        </Text>
        <Group>
          <Button>
            Upload
          </Button>
          <Button
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        </Group>
      </Stack>
      <Center
        style={{
          flex: 1
        }}
      >
        <img
          style={{
            maxWidth: '400px',
            maxHeight: '400px',
            position: 'relative',
            top: '-50px'
          }}
          src="/home.svg" alt="Sales Forecasting" />
      </Center>
    </Group>
  )
}