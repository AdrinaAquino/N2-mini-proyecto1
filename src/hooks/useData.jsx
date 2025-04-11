import { useEffect, useState } from "react";
import axios from "axios";

export default function useData(url) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loadind, setLoading] = useState(false)

  async function getTasks() {
    try {
      const {data} = await axios.get(url)
      setTasks(data)

    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    getTasks()
  }, [url])
  return {
    tasks, error, loadind
  }
}
