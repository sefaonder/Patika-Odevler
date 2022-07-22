const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const {events,locations,users,participants} = require('./data.json')


const typeDefs = gql`
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

  type User {
    id:Int!
    username:String
    email:String
  }
  type Location {
    id:Int!
    name:String
    desc:String
    lat:Float
    lng:Float
  }
  type Participant {
    id:Int!
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
`;

const resolvers = {
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