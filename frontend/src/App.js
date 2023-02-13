import {useState, useEffect} from "react"
import axios from "axios";
import { ChakraProvider, SimpleGrid } from '@chakra-ui/react'
import NewModal from './components/Modal';
import AppBar from "./components/AppBar";
import CarCard from "./components/CarCard";

function App() {
  const [value, setValue] = useState('Seminovo')
  const [cars, setCar] = useState([]);
  const [carInfo, setCarInfo] = useState();

  useEffect(() => {
      getCars();
  }, []);

  const getCars = async () => {
      const response = await axios.get('http://localhost:5000/');
      setCar(response.data);
  }

  async function changeType(type) {
      const reponse_aux = await axios.get('http://localhost:5000/tipo/' + type);
      setCar(reponse_aux.data);
      console.log(reponse_aux.data)    
  }

  function changeInfo(car) {
    setCarInfo(car)
    console.log(carInfo)
  }

  return (
    <ChakraProvider>
      <AppBar setValue={setValue} value={value} changeType={changeType}/>
      <SimpleGrid columns={5} spacing={1}>
        {
          cars?.map((car, index) => {
            return <CarCard tipo={car.tipo} ano={car.ano} marca={car.marca} km={car.km} valor_atual={car.valor_atual} car={car} changeInfo={changeInfo}/>
          })
        }
      </SimpleGrid>
      
    </ChakraProvider>
  );
}

export default App;
