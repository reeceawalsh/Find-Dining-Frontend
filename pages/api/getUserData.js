import axios from "axios";

// gets users data
export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        try {
            const response = await axios.get(
                `${process.env.STRAPI_URL}/users/${id}?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            res.status(200).json(response.data);
        } catch (error) {
            res.status(500).json({ message: "An error occurred" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
