import { Button } from '@chakra-ui/button';
import { Box, Center, Flex, Heading } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Users from './components/Users';
import { SetDarkMode } from './redux/actions/global/GlobalActions';
import { RootStore } from './redux/store';

const App = () => {

  // const [dark, setDark] = useState(false);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { dark, loading } = useSelector((state: RootStore) => state.global);

  // useEffect(() => {
  //   // setLoading(true);
  //   // setTimeout(function () { setLoading(false); }, 2000);
  // }, []);

  return (
    <Box height="100vh" width="100vw" background={dark ? "#1a202c" : "white"}>
      { loading ? <Flex justifyContent="center" alignItems="center"
        height="100%">
        <CircularProgress isIndeterminate color="green.300" />
        <Heading marginLeft="10px" color={dark ? "white" : "black"}>Please wait...</Heading>
      </Flex>
        :
        <Flex height="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Center flexDirection="column">
            <Button marginBottom="10px" 
            onClick={() => dispatch(SetDarkMode(!dark))}
            >Change Mode</Button>
            {/* <CustomInput handleChange={(event) => { }} /> */}
            <Users />
          </Center>
        </Flex>
      }
    </Box>
  );
}

export default App;
