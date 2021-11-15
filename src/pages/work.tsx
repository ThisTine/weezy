import {
  Button,
  Heading,
  HStack,
  Skeleton,
  toast,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { API, graphqlOperation } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import { Project, SearchProjectsQuery } from "../API";
import CropContainer from "../components/CropContainer";
import ProgressTab from "../components/ProgressTab";
import { AuthContext } from "../contexts/AuthContextProvider";
import { getProjectStatus } from "../functions/getProjectStatus";
import { searchProjects } from "../graphql/queries";

const work = () => {
  const [projects, setprojects] = useState<Project[]>([]);
  const [isloadingdata, setisloading] = useState(true);
  const toast = useToast({ position: "top-left", status: "success" });
  const { aka, isloading, isloggedin, uid, role } = useContext(AuthContext);

  const getdata = async () => {
    try {
      const alldata = (await API.graphql(
        graphqlOperation(searchProjects, {
          filter: { status: { match: "reviewing" } },
        })
      )) as { data: SearchProjectsQuery };
      if (alldata.data.searchProjects.items) {
        // console.log(alldata.data.searchProjects.items);
        setprojects(alldata.data.searchProjects.items);
      }
    } catch (err) {
      console.log(err);
      toast({ status: "error", title: "Error", description: err.message });
    }
    setisloading(false);
  };
  useEffect(() => {
    if (!isloading && isloggedin && uid && role) {
      getdata();
    }
  }, [isloading, isloggedin, uid, role]);
  return (
    <CropContainer containerProps={{minH:"100vh",mb:10}} >
      {role === "developer" && (
        <HStack w="100%" paddingY={5} justifyContent={"center"}>
          <NextLink href={"/dashboard"}>
            <Button rounded={"full"}> งานที่ทำอยู่</Button>
          </NextLink>
          <Button colorScheme={"green"} rounded={"full"}>
            หางานที่เปิดอยู่
          </Button>{" "}
        </HStack>
      )}
      <Heading>งานที่เปิดอยู่ 👋</Heading>

      {(!isloadingdata && projects?.length === 0  ) && <VStack mt={20} p={20} bgGradient={"linear(to-b,purple.100,purple.200)"} rounded={"2xl"} shadow={"lg"} >
            <Heading color="gray.600" >เหมือนเรายังไม่พบงานที่เปิดอยู่ในตอนนี้เลย ! 🙇🏽‍♂️🙇🏽‍♂️ </Heading>
        </VStack> }


      {isloadingdata && (
        <VStack w="100%" spacing={5}>
          <VStack
            cursor={"pointer"}
            w="100%"
            bg="white"
            p={5}
            paddingY={10}
            shadow={"lg"}
            rounded={"xl"}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <VStack alignItems={"flex-start"}>
                <Skeleton w="100%" h={10} />
                <Skeleton w="100%" h={5} />
              </VStack>
              <Skeleton w="100%" h={10} />
            </HStack>
            <Skeleton w="100%" h={10} />
          </VStack>
          <VStack
            cursor={"pointer"}
            w="100%"
            bg="white"
            p={5}
            paddingY={10}
            shadow={"lg"}
            rounded={"xl"}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <VStack alignItems={"flex-start"}>
                <Skeleton w="100%" h={10} />
                <Skeleton w="100%" h={5} />
              </VStack>
              <Skeleton w="100%" h={10} />
            </HStack>
            <Skeleton w="100%" h={10} />
          </VStack>
          <VStack
            cursor={"pointer"}
            w="100%"
            bg="white"
            p={5}
            paddingY={10}
            shadow={"lg"}
            rounded={"xl"}
          >
            <HStack width={"100%"} justifyContent={"space-between"}>
              <VStack alignItems={"flex-start"}>
                <Skeleton w="100%" h={10} />
                <Skeleton w="100%" h={5} />
              </VStack>
              <Skeleton w="100%" h={10} />
            </HStack>
            <Skeleton w="100%" h={10} />
          </VStack>
        </VStack>
      )}

      <VStack w="100%">
        {projects?.map((item) => (
          <ProgressTab
            issubmitted={false}
            description={item.description}
            key={item.id}
            detail={getProjectStatus(item.status).detailstatus}
            owner={item.owner}
            id={item.id}
            name={item.name}
            progressname={getProjectStatus(item.status).status}
            progress={getProjectStatus(item.status).percent}
          />
        ))}
        {/* <ProgressTab key={item.id} detail={getProjectStatus(item.status).detailstatus} id={item.id} name={item.name} progressname={getProjectStatus(item.status).status} progress={getProjectStatus(item.status).percent}  /> */}
      </VStack>
    </CropContainer>
  );
};

export default work;
