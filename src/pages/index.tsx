import {
  Flex,
  Button,
  Text,
  Box,
  VStack,
  SimpleGrid,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ServiceCard } from "../components/ServiceCard";
import { EducationCard } from "../components/EducationCard";
import { PortfolioCard } from "../components/PortfolioCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { SidebarNavH } from "../components/Sidebar/SidebarNavH";
import EmailForm from "../components/EmailForm";
import { Sidebar } from "../components/Sidebar";
import { SidebarNavHMobile } from "../components/Sidebar/SidebarNavHMobile";
import { useWindowSize } from "../functions";

export default function Index() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: true,
    xl: false,
  });

  const { width } = useWindowSize();

  return (
    <Flex>
      <Sidebar />
      <VStack w="100%" px={[0, 0, 0, 0, 2]} alignItems="center" mb="10">
        <Box w="100%">
          <SidebarNavH />
        </Box>
        {/*I'm Arthur*/}
        {!isDrawerSidebar ? (
          <Box
            minH={["511px"]}
            w="100%"
            maxW="1105px"
            backgroundImage='url("Main menu.png")'
            backgroundRepeat="no-repeat"
            bgColor="#ffffff"
          >
            <Flex
              mt={14}
              display="grid"
              justifyContent="center"
              mr={[1, 1, 10]}
              px={[1, 1, 0]}
            >
              <Text
                color="#2B2B2B"
                fontWeight="700"
                fontSize={["1rem", "1rem", "3rem"]}
              >
                I’m Arthur Turini <br />
                <a style={{ color: "#FFB400" }}>Back-end</a> Developer
              </Text>
              <Flex w="100%">
                <Text mt={5} maxW={430}>
                  I’m back-end developer, I work with JAVA and PL/SQL, but I
                  also know React.js and Next.js. I have two years of
                  experience.
                </Text>
              </Flex>

              <Button
                bgColor="#FFB400"
                borderRadius="5"
                w="154px"
                minH="51px"
                mt={["16", "16", "8"]}
                justifySelf="center"
                _hover={{}}
                _focus={{}}
                mr="2"
              >
                <Text
                  fontSize="16px"
                  lineHeight="19px"
                  fontWeight="500"
                  color="#2B2B2B"
                >
                  ABOUT ME
                </Text>
                <HiArrowNarrowRight color="#2B2B2B" />
              </Button>
            </Flex>
          </Box>
        ) : (
          <></>
        )}
        {width > 800 ? <></> : <SidebarNavHMobile />}

        {/*My Services*/}
        <Box w="100%" maxW="1020px">
          <Flex mt={14} display="grid">
            <Text
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign="center"
              w="100%"
            >
              My Services
            </Text>
            <SimpleGrid
              mt="12"
              gap={4}
              columns={[0, 0, 2, 3, 3]}
              justifyContent="center"
              w="100%"
              justifyItems="center"
            >
              <ServiceCard
                title="BackEnd development"
                desc="APIs, Microservices"
                image="coding.png"
              />
              <ServiceCard
                title="FrontEnd development"
                desc="Websites, Web Apps"
                image="illustration.png"
              />
              <ServiceCard
                title="Video Editor"
                desc="Adobe Premiere Pro."
                image="ABC.png"
              />
            </SimpleGrid>
          </Flex>
        </Box>
        {/*Education*/}
        <Box w={["95%", "95%", "95%", "100%"]} maxW="970px">
          <Flex mt={14} display="grid">
            <Text
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign="center"
            >
              Education
            </Text>

            <VStack
              mt="12"
              gap={4}
              w="100%"
              bgColor="#FFFFFF"
              pt={[0, 0, 4]}
              pb="12"
            >
              <EducationCard
                title="Universidade Federal Espirto Santo"
                desc="I was a student of Information System in UFES for two years, at the time, the college stopped due to COVID-19 and I started working in another city,
then I decided to stop attending college and start distance learning because we had no return date."
                time="Jul 2019 -  Lock"
              />
              <Box
                w="90%"
                h="0"
                borderBottom="2px solid #F0F0F6"
                margin="0 auto"
              />
              <EducationCard
                title="ESAB - Escola Superior Aberta Brasil"
                desc="As I was forced to interrupt my face-to-face college, this forced me to start distance college, which is where I am currently."
                time="Jan 2020 -  Present"
              />
              <Box
                w="90%"
                h="0"
                borderBottom="2px solid #F0F0F6"
                margin="0 auto"
              />
              <EducationCard
                title="EAC personalite"
                desc="EAC operates in the area of ​​Educational Exclusivity,
                I started in 2021 where I took five classes a week for eight months, now I'm still studying here, but only three times a week."
                time="Jan 2021 - Present"
              />
            </VStack>
          </Flex>
        </Box>
        {/*Portifolio */}
        <Box w={["90%", "90%", "100%", "100%"]} maxW="970px">
          <Flex mt={14} display="grid">
            <Text
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign="center"
            >
              Portfólio
            </Text>
            <Text mt={5} textAlign="center" w="50%" justifySelf="center">
              This is my portfolio with my last apllications, I don’t have much{" "}
              time for do that, but in the future there will more content here
            </Text>
            <SimpleGrid
              mt="12"
              gap={4}
              columns={[0, 0, 2, 3]}
              justifyItems="center"
              w="100%"
              mb="10"
            >
              <PortfolioCard
                title="igNews"
                href="https://ignews-xi-ochre.vercel.app/"
                image="ignews.png"
                desc="Blog developed in Rocketseat's React.js Ignite to learn Next.js and its fundamentals, using back-end functions (serverless) to communicate with a payment platform (Stripe), database (FaunaDB) and CMS (Prismic CMS) )."
              />
              <PortfolioCard
                title="dashGo"
                href="https://dashgo-j8lm8glds-arthurtg11.vercel.app/dashboard"
                image="dashgo.png"
                desc="This project was developed during one of Rocketseat's Ignite chapters! The idea was to develop a dashboard completely using the Chakra UI, also making the application responsive."
              />
              <PortfolioCard
                title="worldtrip"
                href="https://github.com/arthurtg11/IgniteExercicio4"
                image="worldtrip.png"
                desc="This project was developed during one of Rocketseat's Ignite chapter challenges! The idea was to develop a website from scratch following the Figma layout using only the Chakra UI system."
              />
              <PortfolioCard
                title="spacetraveling"
                href="https://github.com/arthurtg11/spacetraveling"
                image="spacetraveling.png"
                desc="This blog was a project developed during a Rocketseat Ignite challenge! The idea was to develop an application from scratch, from the front-end to the connection with the Prismic CMS to publish the posts."
              />
            </SimpleGrid>
          </Flex>
        </Box>
        {/*Experience */}
        <Box w={["70%", "70%", "100%", "100%"]} maxW="970px">
          <Flex mt={14} display="grid">
            <Text
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign="center"
            >
              Experience
            </Text>
            <Text mt={5} textAlign="center">
              These are the last companies that I worked for
            </Text>
            <SimpleGrid
              mt="12"
              gap={16}
              columns={[1, 1, 2, 2]}
              display={["grid", "grid", "grid", "flex"]}
              justifyContent="center"
              w="100%"
              mb="10"
              justifyItems="center"
            >
              <ExperienceCard
                title="Cs3 Revestimentos"
                href="https://www.linkedin.com/company/cs3-m%C3%A1rmores-e-granitos-do-brasil/"
                image="https://media-exp1.licdn.com/dms/image/C4D0BAQEf07ay54ar5Q/company-logo_200_200/0/1651092729862?e=1677110400&v=beta&t=VgCENMpmTF-7v0mfSpYPeQw-9zu6ddkEesd-0M0fTMI"
                desc="This was my first company, I started as a treinee and I worked for ten months. I worked with Senior Sistemas, SQL, React.js and React Native."
                date="08/2020 - 06/2021"
              />
              <ExperienceCard
                title="dashGo"
                href="https://www.linkedin.com/company/conexoscloud/"
                image="https://media-exp1.licdn.com/dms/image/C4D0BAQGvcu-Bm_7BrA/company-logo_200_200/0/1658424100430?e=1677110400&v=beta&t=HUtdUCwYE1p5bppcVHA35ZCQj9gX2fn7u9_jYjrxalw"
                desc="This was my second company, I started as a treinee and now I’m Jr. Developer and I work with JAVA and PLSQL."
                date="08/2021 - Present"
              />
            </SimpleGrid>
          </Flex>
        </Box>
        {/*Contact and Infos*/}
        <SimpleGrid
          mt="12"
          gap={[0, 0, 0, 2, 16]}
          columns={[0, 0, 0, 2]}
          display={["grid", "grid", "grid", "flex"]}
          justifyContent="center"
        >
          <Box>
            <Text
              w="100%"
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign={["center", "center", "left"]}
            >
              Contact Me
            </Text>
            <VStack
              h="665px"
              bgColor="#FFFFFF"
              p="6"
              mb="20"
              mt="6"
              alignItems="center"
            >
              <EmailForm />
            </VStack>
          </Box>
          <Box>
            <Text
              color="#2B2B2B"
              fontWeight="700"
              fontSize="32px"
              textAlign="center"
              mb="6"
            >
              Contact information
            </Text>
            <VStack
              w="370px"
              h="210px"
              fontSize="18px"
              fontWeight="500"
              lineHeight="123%"
              bgColor="#FFFFFF"
              mt="6"
              px="8"
              pt="6"
              spacing="3"
              m="0 auto"
            >
              <Box mb="6">
                <Image src="location.png" />
              </Box>
              <Flex w="100%" justifyContent="space-between">
                <Text>Country: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  Brazil
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between">
                <Text>City: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  Alegre-ES
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between">
                <Text>Streat: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  103, Rua José Elias
                </Text>
              </Flex>
            </VStack>
            <Box mb="6"></Box>
            <VStack
              w="370px"
              h="210px"
              fontSize="18px"
              fontWeight="500"
              lineHeight="123%"
              bgColor="#FFFFFF"
              mt="6"
              px="8"
              pt="6"
              spacing="3"
              m="0 auto"
            >
              <Box mb="6">
                <Image src="email.png" />
              </Box>
              <Flex w="100%" justifyContent="space-between">
                <Text>Email: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  arthurtgam@gmail.com
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between">
                <Text>Discord: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  ARTHUR#5183
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between">
                <Text>Github: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  @arthurtg11
                </Text>
              </Flex>
            </VStack>
            <Box mb="6"></Box>
            <VStack
              w="370px"
              h="210px"
              fontSize="18px"
              fontWeight="500"
              lineHeight="123%"
              bgColor="#FFFFFF"
              px="8"
              pt="6"
              spacing="3"
              m="0 auto"
            >
              <Box mb="6">
                <Image src="celular.png" />
              </Box>
              <Flex w="100%" justifyContent="space-between">
                <Text>Office: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  +55 (28)99937-8281
                </Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between">
                <Text>Personal: </Text>
                <Text fontSize="15px" fontWeight="400" lineHeight="24px">
                  +55 (28)99937-8281
                </Text>
              </Flex>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
