import "@mantine/core/styles.css";
import Head from "next/head";
import { AppShell, Burger, Group, MantineProvider, Skeleton, Text } from "@mantine/core";
import { theme } from "../theme";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: any) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter()
  function navigateToHome() {
    router.push('/')
  }

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Sales Forecast</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header
          bg={'#10439F'}
        >
          <Group h="100%" px="md">
            <Text
              style={{
                cursor: 'pointer'
              }}
              c={'white'}
              onClick={navigateToHome}
            >
              Sales Forecasting
            </Text>
          </Group>
        </AppShell.Header>
        <AppShell.Main
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}