const axios = require('axios');

const apiEndpoint = 'https://70c2ac59-a99e-4e01-a640-f9744cb223e5.mock.pstmn.io';

async function fetchNeighbours(node) {
  try {
    return axios.get(`${apiEndpoint}/${node}`);
  } catch (error) {
    console.error(`Error fetching data from ${apiEndpoint}: ${error}`);
  }
}

// async function searchGraph(start) {
//   const startTime = Date.now();
//   let output = [start];
//   let queue = [start];
//   let set = new Set([start]);

//   while (queue.length > 0) {
//     const node = queue.shift();
//     let { data: neighbours } = await fetchNeighbours(node);

//     if (neighbours) {
//       for (let neighbour of neighbours) {
//         if (!set.has(neighbour)) {
//           output.push(neighbour);
//           set.add(neighbour);
//           queue.push(neighbour);
//         }
//       }
//     }
//   }

//   const endTime = Date.now();
//   console.log(output, endTime - startTime);
// }

// searchGraph(1);

// ---------------------------------------------------------------------------
// follow up: optimize algorithms

async function searchGraph(start) {
  let startTime = Date.now();
  let output = [start];
  let queue = [start];
  let set = new Set([start]);

  const fetchAllNeighbours = async (nodes) => {
    const responses =  await Promise.all(nodes.map((node) => fetchNeighbours(node)));
    let neighbours = [];

    responses.forEach((response) => {
      response.data.forEach((node) => {
        if (!set.has(node)) {
          neighbours.push(node);
        }
      })
    });

    return neighbours;
  };

  while (queue.length > 0) {
    let neighbours = await fetchAllNeighbours(queue);
    queue = [];

    if (neighbours) {
      for (let neighbour of neighbours) {
        if (!set.has(neighbour)) {
          output.push(neighbour);
          set.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }

  const endTime = Date.now();
  console.log(output, endTime - startTime);
}

searchGraph(1);
