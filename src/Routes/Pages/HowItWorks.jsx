import {
  Box,
  Heading,
  Text,
  AspectRatio,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import style from "../../../src/styles/howItWorks.module.css";
import { Footer } from "../../Components/Footer/Footer";
export default function HowItWorks() {
  return (
    <Box>
      <Box as="main" className={style.mainContainer}>
        <Heading
          // className={style.headingText}
          align="center"
          fontSize="70px"
          fontWeight={"100"}
          letterSpacing="2px"
        >
          How it works
        </Heading>{" "}
        <Heading className={style.headingTextTwo}>
          & why you should switch to My Hours
        </Heading>
        <br />
        <Text className={style.textDescription}>
          Time tracking was a pain. We fixed it and made time tracking worth the
          effort. My Hours is easy to use and gets the most out of your data
          with powerful reporting. Teams that use My Hours are more productive,
          efficient and organized.
        </Text>
        <br />
        <Box as="div" className={style.getStartedButton}>
          Get Started It's Free
        </Box>
        <br />
        <AspectRatio maxW="74%" ratio={1.5} m="auto" mt="100px">
          <iframe
            src="https://www.youtube.com/embed/VpMysclixyQ"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </AspectRatio>
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Organize your work with projects and tasks
          </Heading>
          <Text className={style.simpleText}>
            Breaking down your work into projects and tasks is done with a few
            keystrokes. Prioritize tasks, add details and assign them to your
            team to complete. Set up an estimated budget on a project or task
            level.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerSortImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png"
          alt="image"
        />
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Set flexible billable rates and manage rate changes
          </Heading>
          <Text className={style.simpleText}>
            Every client, project, task and team member can be billed with a
            custom rate, but with smart defaults. And, when rates change, you
            decide how it applies to your past work.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerSortImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png"
          alt="image"
        />
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Track your time working with all the details
          </Heading>
          <Text className={style.simpleText}>
            Tracking work time is more than a few fields. Add styled notes to
            your logs, tag with custom keywords, attach files and enter
            expenses. With keyboard shortcuts, you can do it in no-time.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerLongImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png"
          alt="Liong Image"
        />
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Dazzle your clients with custom reports
          </Heading>
          <Text className={style.simpleText}>
            No more one-style-fits-all reports. Go beyond filters and set up
            reports the way you or your clients want them, without having to
            retreat back to Excel.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerSortImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"
          alt="image"
        />
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Look at the time spent from every angle
          </Heading>
          <Text className={style.simpleText}>
            Fancy dashboards are not enough and with My Hours you can calculate
            your profit, generate real-time pivot tables or download a simple
            weekly timesheet.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerLongImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png"
          alt="image"
        />
        <br />
        <Box className={style.simpleDetailsContainer}>
          <Heading className={style.simpleHeading}>
            Approve or comment on your team’s time logs
          </Heading>
          <Text className={style.simpleText}>
            Going through every timesheet is a hassle. Select a few projects or
            team members that might need a careful inspection, while other time
            logs do not need explicit approval.
          </Text>
        </Box>
        <Image
          className={style.simpleContainerLongImage}
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png"
          alt="image"
        />
        <br />
        <SimpleGrid columns={[1, 1, 2, 2]} m="auto" w="85%" mt="60px">
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7.png"
            alt="image"
          />
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Keep clients in the loop with scheduled email reports
            </Heading>
            <Text className={style.simpleText}>
              Setting and downloading reports each month takes precious time.
              Save your report settings and have My Hours send it to you or your
              clients directly every period.
            </Text>
          </Box>
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8.png"
            alt="image"
          />
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Create invoices straight from your tracked hours
            </Heading>
            <Text className={style.simpleText}>
              No need for an additional tool that handles the invoicing.
              Calculate the billable amount for each client and generate a
              numbered invoice that can be sent via email straight away.
            </Text>
          </Box>
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png"
            alt="image"
          />
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Flexible, but simple access roles
            </Heading>
            <Text className={style.simpleText}>
              With a simple 3-role system, you’ll always know who sees what. You
              can hide costs and billable amounts from anyone, except account
              administrators.
            </Text>
          </Box>
          <Image
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"
            alt="image"
          />
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Count your chickens and calculate your costs
            </Heading>
            <Text className={style.simpleText}>
              On top of billable rates, teams can add labor costs and expenses.
              Monitor your project costs with a (monthly) budget and calculate
              your profits or losses.
            </Text>
          </Box>
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Sync your data with more than a 1000 tools
            </Heading>
            <Text className={style.simpleText}>
              Transfer clients, projects and tasks from Quickbooks and other
              solutions via Zapier. Documented API enables tech-savvy folks to
              build their own integrations.
            </Text>
          </Box>{" "}
          <Box className={style.simpleDetailsContainer}>
            <Heading className={style.simpleHeading}>
              Track time on the go with a mobile app
            </Heading>
            <Text className={style.simpleText}>
              Besides tracking time, add new projects, manage tasks and view
              reports - all through our mobile apps. Both iOS and Android are
              supported.
            </Text>
          </Box>
          <Image
            w={"70%"}
            m="auto"
            mt="40px"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-800.png"
            alt="image"
          />
          <Image
            w="70%"
            m="auto"
            mt="40px"
            src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-800.png"
            alt="image"
          />
        </SimpleGrid>
        <br />
        <Image
          width={"150px"}
          m="auto"
          mt="50px"
          src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4fa86e0322e7deff06f6e_Group%203.png"
          alt="alertImage"
        />
        <br />
        <Heading align="center" fontWeight={"600"} fontSize="35px">
          <Box as="u">No, you cannot spy on your employees with My Hours</Box>
        </Heading>
        <Text align="center" fontSize={"20px"} w="73%" m="auto" mt="15px">
          My Hours does not record your or your employees’ screens. No
          screenshots, no apps tracked, no{" "}
          <Box as="u"> employee monitoring.</Box> Of course, you are free to
          view work logs that your team members have entered.
        </Text>
        <br />
        <Heading className={style.headingTextTwo} w="65%" m="auto">
          Take a look at the complete list of features in My Hours.
        </Heading>
        <br />
        <Text className={style.textDescription}> Or simply try it out: </Text>
        <br />
        <Box as="div" className={style.getStartedButton}>
          Get Started It's Free
        </Box>
        <br />
        <Heading
          as="h3"
          size="xl"
          align="center"
          mt="50px"
          fontWeight="600"
          color="#375D75"
        >
          Have questions? We're here
        </Heading>
        <br />
        <Text w="50%" align={"center"} fontSize="20px" m="auto">
          It's always nice to have someone to talk to when facing new software.
          Get in touch and we'll try our best to help you out.
        </Text>
      </Box>
      <Footer />
    </Box>
  );
}
