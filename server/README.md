# Our Server

Our server will let us make the following actions:
- List an specific LIST a Specific UserID
  `LU ${userid}` 
  And will return the userid in the following format:
```
/getUserGroups
  {
    userid: 'A999999',
    connections:[{
      group: 'SYS1'
      auth: 'USE',
      connectOwner: 'SYS1',
      connectDate: '19.131'
    },]
  }
```

- Remove a connection for specific UserID and return updated list of Groups
  `RE ${userid} GROUP(${group})`
```
/removeUserFromFroup
  {
    userid: 'A999999',
    connections:[{
      group: 'SYS1'
      auth: 'USE',
      connectOwner: 'SYS1',
      connectDate: '19.131'
    },]
  }
```

- Connect user and return updated list of Groups
  `CO ${userid} GROUP(${group})`
```
/connectUserToGroup
  {
    userid: 'A999999',
    connections:[{
      group: 'SYS1'
      auth: 'USE',
      connectOwner: 'SYS1',
      connectDate: '19.131'
    },]
  }
```