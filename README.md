# **Star Wars SWAPI API Wrapper for RN apps**

### Current components are:

- **ResourceList** - renders list of all available resources. Not really useful for this library using getResources from Swapi module;
- **PeopleList** - render list of all people using getPeople([{[page: page number], [search: search string]}]) from Swapi module;
- **PlanetsList** - render list of all planets using getPlanets([{[page: page number], [search: search string]}]) from Swapi module;
- **SpeciesList** - render list of all species using getSpecies([{[page: page number], [search: search string]}]) from Swapi module;
- **FilmsList** - render list of all films using getFilms([{[page: page number], [search: search string]}]) from Swapi module;
- **VehicleList** - render list of all vehicle using getVehicles([{[page: page number], [search: search string]}]) from Swapi module;
- **ShipsList** - render list of all ships using getShips([{[page: page number], [search: search string]}]) from Swapi module;

 ## **Examples:**
 
 ### **ResourceList**
 ```
const ResourceList = () => {
  const [resoruce, setResource] = useState([]);
  const getResources = async () => {
    try {
      const res = await Swapi.getResources();
      setResource(Object.keys(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getResources();
  }, []);
  return (
    <FlatList
      keyExtractor={item => item}
      data={resoruce}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.item}>{item}</Text>
          </View>
        );
      }}
    />
  );
};
```

### **To be Done:**
- *Create wrapper for screens;*
- *Create hook for lists*
- *Create animations for components;*
- *Add gestures inside lists;*

### **History**
- *Added SWAPI API implementation;*
- *Added custom components for React Native apps;*
- *Fixed imports problem, removed usused variables*
