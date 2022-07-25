const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const {events,locations,users,participants} = require('./data.json')

function generateId(){
  // generate unique number ID
  let time = Date.now();
  return time.toString(10).substring(5)
}

const typeDefs = gql`
  #Event
  type Event {
    id:Int!
    title:String
    desc:String
    date:String
    from:String
    to:String
    location_id:Int!
    user_id:Int!
    user:User!
    location:Location!
    participants:[Participant!]!
  }

  input UpdateEventInput{
    title:String!
    desc:String
  }

 
  #User
  type User {
    id:Int!
    username:String
    email:String
  }

  input UpdateUserInput{
    username:String!
    email:String
  }

  type DeleteAllOutput {
    count:Int!
  }

  #Location
  type Location {
    id:Int!
    name:String
    desc:String
    lat:Float
    lng:Float
  }

  input UpdateLocationInput{
    name:String
    desc:String
  }


  #Participant
  type Participant {
    id:Int!
    user_id:Int!
    event_id:Int!
  }

  input UpdateParticipantInput{
    user_id:Int!
    event_id:Int!
  }

  type Query {
    users: [User!]!
    user(id:Int!): User!

    events: [Event!]!
    event(id:Int!): Event!
    

    locations:[Location!]!
    location(id:Int!):Location!

    participants:[Participant!]!
    participant(id:Int!):Participant
  }

  type Mutation {
    #User
    addUser(username:String!,email:String!):User!
    updateUser(id:Int!,data:UpdateUserInput!):User!
    deleteUser(id:Int!):User!
    deleteAllUser:DeleteAllOutput!

    #Event
    addEvent(username:String!,email:String!):User!
    updateEvent(id:Int!,data:UpdateEventInput!):User!
    deleteEvent(id:Int!):User!
    deleteAllEvents:DeleteAllOutput!

    #Location
    addLocation(username:String!,email:String!):User!
    updateLocation(id:Int!,data:UpdateLocationInput!):User!
    deleteLocation(id:Int!):User!
    deleteAllLocations:DeleteAllOutput!

    #Participant
    addParticipant(username:String!,email:String!):User!
    updateParticipant(id:Int!,data:UpdateParticipantInput!):User!
    deleteParticipant(id:Int!):User!
    deleteAllParticipants:DeleteAllOutput!
  }

`;

const resolvers = {
  Mutation:{
    // User
    addUser : (parents,args) => {
      const newUser = {id:generateId(),username:args.username,email:args.email}
      users.push(newUser)
      return newUser
    },

    updateUser: (parents,args) =>{
      const user_index = users.findIndex(x=>x.id===args.id)

      if(user_index === -1){
        throw new Error('User Not Found')
      }

      const updatedUser = users[user_index] = {
        ...users[user_index],
        ...args.data
      }
      return updatedUser;
    },

    deleteUser : (parents,args) =>{
      const user_index = users.findIndex(x=>x.id===args.id)

      if(user_index === -1){
        throw new Error('User Not Found')
      }

      const deletedUser = users[user_index]
      users.splice(user_index,1)
      
      return deletedUser
    },

    deleteAllUser : (parents,args) =>{
      const length = users.length;
      users.splice(0,length);

      return {
        count:length,
      }
    }

    // Event

    // Location

    // Participant
  },
  Query: {
      //users
      users: () => users,
      user: (parents,args) => {return users.find(user =>  Number(user.id) == args.id)},

      //events
      events: () => events,
      event :(parents,args) => {return events.find(event =>  Number(event.id) == args.id)},

      //locations
      locations: () => locations,
      location :(parents,args) => {return locations.find(location =>  Number(location.id) == args.id)},

      //participants
      participants: () => participants,
      participant :(parents,args) => {return participants.find(participant =>  Number(participant.id) == args.id)}
  },
  Event:{
    user: (parent) =>{return users.find((user) => user.id === parent.user_id) },
    participants: (parent) =>{return participants.filter((participant) => participant.event_id === parent.id) },
    location:  (parent) =>{return locations.find((location) => location.id === parent.location_id) }
  }
};

const server = new ApolloServer({ typeDefs, resolvers,plugins: [
  ApolloServerPluginLandingPageGraphQLPlayground({
    // options
  })
] });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})