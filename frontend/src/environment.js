import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchQuery(operation, variables) {
	return fetch("http://localhost:8000/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	})
	.then((res) => {
		if (res.status !== 200 && res.status !== 201) {
			throw new Error("Failed!");
		}
		return res.json();
	});
}

export default new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});
