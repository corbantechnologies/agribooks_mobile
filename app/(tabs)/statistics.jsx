import { View, ScrollView, StatusBar, Image, Button, FlatList, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Typography from '../../components/Typography'
import { useEffect, useState } from 'react';
import { useSystem } from '@/powersync/Powersync';
import { LIST_TABLE, TODO_TABLE } from '@/powersync/AppSchema';
import { uuid } from '@/powersync/uuid';
import Ionicons from '@expo/vector-icons/Ionicons';

const Statistics = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState('');
  const [loading, setLoading] = useState(false);
  const [todos,setTodos] = useState([]);
  const [lists,setLists] = useState([]);
  const {supabaseConnector, db, powersync} = useSystem();

  // load todos
  useEffect(()=>{
    loadTodos()
    loadLists()
  },[])
  const loadTodos = async () => {
    const result = await db.selectFrom(TODO_TABLE).selectAll().execute();
    setTodos(result);
  };
  const loadLists = async () => {
    const result = await db.selectFrom(LIST_TABLE).selectAll().execute();
    setLists(result);
  };
  db.watch(loadLists, {
    onResult(results) {
      setLists(results);
    },
  });
  const addTodo = async () => {
    const {userID} = await supabaseConnector.fetchCredentials();
    const todoId = uuid();
    await db.insertInto(TODO_TABLE).values({
      id:todoId,
      user_id:userID,
      description:todo,
      is_complete:0,
    }).execute();
    setTodo('');
    loadTodos();
  }
  const addList = async () => {
    const {userID} = await supabaseConnector.fetchCredentials();
    const listId = uuid();
    try {
      await db.insertInto(LIST_TABLE).values({
        id:listId,
        name: list,
        owner_id: userID,
      }).execute();
    } catch (error) {
      console.error('Error during insertInto:', error);
    }
    setList('');
    loadLists();
  }
  const updateList = async (list) => {
    try {
      await db
      .updateTable(LIST_TABLE)
      .where('id', '=', list.id)
      .set('name', 'My list')
      .execute();
      loadLists();
    } catch (error) {
      console.error('Error during updating:', error);
    }
  };

  const deleteList = async (list) => {
    await db.deleteFrom(LIST_TABLE).where('id', '=', list.id).execute();
    loadLists();
  };
  return (
    <SafeAreaView style={{flex:1}}>
      <Typography>Statistics</Typography>
      <View style={{flexDirection:'row', justifyContent:'space-between', maxWidth:'80%', marginTop:20}}>
        <TextInput
          placeholder="Add new list"
          style={{borderWidth:0.5, flex:1,}}
          value={list}
          onChangeText={setList}
        />
        <TouchableOpacity onPress={addList}>
          <Ionicons name="add-outline" size={24} color="#A700FF" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', maxWidth:'80%', marginTop:20}}>
        <TextInput
          placeholder="Add new todo"
          value={todo}
          style={{borderWidth:0.5, flex:1,}}
          onChangeText={setTodo}
        />
        <TouchableOpacity onPress={addTodo}>
          <Ionicons name="add-outline" size={24} color="#A700FF" />
        </TouchableOpacity>
      </View>
      {lists && <FlatList
      data={lists}
      renderItem={({item})=> 
        <View>
          <Typography>{item.name}</Typography>
          <TouchableOpacity onPress={()=>deleteList(item)}>
          <Ionicons name="trash" size={24} color="#A700FF" />
        </TouchableOpacity>
          <TouchableOpacity onPress={()=>updateList(item)}>
          <Ionicons name="pencil" size={24} color="#A700FF" />
        </TouchableOpacity>
        </View>
      }
      />}
      {todos && <FlatList
      data={todos}
      renderItem={({item})=> <Typography>{item.description}</Typography> }
      />}
    </SafeAreaView>
  )
}

export default Statistics

