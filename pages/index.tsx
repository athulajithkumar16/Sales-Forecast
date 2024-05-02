import { Button, Center, Stack } from "@mantine/core";
import { FileUploader } from "../components/FileUploader/FileUploader";

export default function IndexPage() {
  return (
    <Center
      h={'100%'}
    >
      <Stack
        maw={900}
      >
        <FileUploader />
        <Button>
          Submit
        </Button>
      </Stack>
    </Center>
  );
}
