const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

// Users will filter list by TripType, Temperature, and Duration

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        name: {type: GraphQLString },
        itemType: {type: GraphQLString},
        temp: {type: GraphQLString},
        qty: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        items: {
            type: new GraphQLList(ItemType),
        }
    }
})