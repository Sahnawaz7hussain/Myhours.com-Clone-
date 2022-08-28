import { Heading, Box, Text, SimpleGrid, Stack, Image } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import ModuleUsecase from "../../styles/useCases.module.css";

export default function UseCases() {
  return (
    <Box>
      <Box as="div" className={ModuleUsecase.mainContainer}>
        <Heading
          // align="center"
          // fontSize="70px"
          // fontWeight={"100"}
          // letterSpacing="2px"
          as="h3"
          className={ModuleUsecase.headingTextOne}
        >
          Use cases
        </Heading>
        <Heading className={ModuleUsecase.headingTextTwo}>
          & how My Hours solves problems
        </Heading>
        <Text className={ModuleUsecase.textDescription}>
          From tracking time, to reporting and invoicing your clients, My Hours
          is there for you the whole time.
        </Text>
        <br />
        <Box as="div" className={ModuleUsecase.getStartedButton}>
          Get Started It's Free
        </Box>
        <SimpleGrid
          columns={[1, 1, 3, 3]}
          w="85%"
          m="auto"
          gap="35px"
          mt="150px"
        >
          <Stack spacing={"35px"}>
            <Box
              className={ModuleUsecase.bodyGridContainer}
              bg="#F0F8FF"
              border={"1px"}
              borderColor={"#7FFFD4"}
              boxShadow="lg"
            >
              <Image
                w="70%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png"
                alt="image"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Project billing
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Choose the billing method that is fair for your client and
                represents your actual work.
              </Text>
            </Box>
            <Box
              className={ModuleUsecase.bodyGridContainer}
              bg="#FFFAF0"
              border={"1px"}
              borderColor="#FFDAB9"
              boxShadow="lg"
            >
              <Image
                w="70%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"
                alt="gridImage"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Expence tracking
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Get expenses of your mind and into your invoice, without losing
                a cent or a receipt.{" "}
              </Text>
            </Box>
          </Stack>
          <Stack spacing="35px">
            <Box
              className={ModuleUsecase.bodyGridContainer}
              bg="#F0F8FF"
              border="1px"
              borderColor={"#7FFFD4"}
              boxShadow="lg"
            >
              <Image
                w="65%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc0abed0af890cbb40c6d33_HP-3-1-p-500.png"
                alt="gridImage"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Time reports & Project analytics
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Always know how much time has been spent on your projects and
                tasks in a specific period of time with easy-to-create reports.{" "}
              </Text>
            </Box>
            <Box
              className={ModuleUsecase.bodyGridContainer}
              border={"1px"}
              bg="#F0F8FF"
              borderColor={"#7FFFD4"}
              boxShadow="lg"
            >
              <Image
                w="65%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"
                alt="gridImage"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Calculating project profitability
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Grow your business faster by prioritizing the projects that are
                worth your time, effort and resources.
              </Text>
            </Box>
          </Stack>
          <Stack spacing={"35px"}>
            <Box
              className={ModuleUsecase.bodyGridContainer}
              bg="#FFFAF0"
              border={"1px"}
              borderColor={"#FFDAB9"}
              boxShadow="lg"
            >
              <Image
                w="55%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-500.png"
                alt="image"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Attendence & Absence
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Know who was present at work and track absences and the reasons
                behind them. Make your payroll faster and more accurate by
                exporting all the tracked data. Time, attendance and absence
                tracking in one streamlined solution.
              </Text>
            </Box>

            <Box
              className={ModuleUsecase.bodyGridContainer}
              bg="#F0F8FF"
              border={"1px"}
              borderColor={"#7FFFD4"}
              boxShadow="lg"
            >
              <Image
                w="50%"
                m="auto"
                src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-500.png"
                alt="image"
              />
              <Heading className={ModuleUsecase.bodyGridContainerHeading}>
                Timesheet time tracking
              </Heading>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                Track time just as you are used to, but simpler Because you are
                tired of using unmanageable stacks of paper, excel templates, or
                complex apps week in week out.{" "}
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
        <br />
        <Heading
          m="auto"
          w="80%"
          fontWeight={"600"}
          color="#375d75"
          align="center"
          mt="150px"
        >
          My Hours has changed the way our customers work
        </Heading>
        <br />
        <Text align={"center"} fontSize="18px" mt="25px">
          We’ve helped <Box as="u"> 100.000+ people </Box> track their work{" "}
          <Box as="u"> since 2002.</Box>
          Our software
          <Box as="u">does not include employee monitoring</Box> and never will.
        </Text>
        <br />
        <SimpleGrid
          columns={[1, 1, 3, 3]}
          w="85%"
          m="auto"
          gap="20px"
          mt="30px"
        >
          <Stack spacing={"25px"}>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "Easy tracking of billable hours across various projects.
                <Box as="span">
                  {" "}
                  Makes time tracking for different tasks simple."
                </Box>
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                - Paul H., Business Owner
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "Ease of use, simplicity, streamlined, it really helped me get
                my hour tracking in order. No negatives for the purpose and
                scope for which I am using the software."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                ‍- Arieh F., CFO
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "Easy to use for my team members who are remote but hourly. My
                House provides a simple and easy way to record, track and manage
                activity."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                {" "}
                ‍- Thomas S., Head of Customer Success
              </Heading>
            </Box>
          </Stack>
          <Stack spacing={"25px"}>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "My Hours is great for keeping track of time spent on different
                projects. It makes completing my mandatory timesheets at the end
                of the week WAY FASTER."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                - Michael B., Manager
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "The software is very easy to set up, and you can start using it
                right away to track your time, assigning different hourly rates
                for different types of work."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                - Naomi S., Marketing Manager
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "I really love this software. It keeps track of all my hours and
                is really easy to use. I would definitely recommend this
                software. There is nothing that I don't like about this
                software."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                ‍- Christina C., Paralegal
              </Heading>
            </Box>
          </Stack>
          <Stack spacing={"25px"}>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "I've enjoyed using My Hours, and I use it every day. Great tool
                for tracking my time!"
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                - Cody H., Engineer
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "Simple to use, perfect for the price, genuinely the best hour
                tracker I've used yet."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                ‍- Leah M., Engineer
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "This is the easiest-to-use software that I've found in terms of
                tracking hours and minutes for multiple projects."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                {" "}
                Michelle W., Virtual Assistant
              </Heading>
            </Box>
            <Box>
              <Text className={ModuleUsecase.bodyGridContainerDesc}>
                "I love that I can track my hours and use it to generate
                meaningful reports to measure time spent. It's intuitive,
                easy-to-use, and highly customizable."
              </Text>
              <Heading className={ModuleUsecase.reviewOwnerHeading}>
                ‍- Kristen B., Bussines Owner
              </Heading>
            </Box>
          </Stack>
        </SimpleGrid>
        <Heading
          as="h3"
          align="center"
          color="#3b8fc2"
          fontWeight={"600"}
          mt="20px"
        >
          <Box as="u"> Read more reviews</Box>
          <br />
        </Heading>
      </Box>
      <Footer />
    </Box>
  );
}
