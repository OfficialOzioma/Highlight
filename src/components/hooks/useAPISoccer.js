import { useState, useEffect } from 'react'
import axios from 'axios';
// import KEY from "../../key"

const useAPISoccer = () => {

    const [highlights, setHighlights] = useState([]);
    const [loading, setLoading] = useState(false);

    const token = "MTg0NjQ0XzE3MzA3MzE4MzBfNmZlOGQyZWFjZmQwZDNiZGZlZjVmMTJhNjVmYWM2ZWViZTM3NjczYw=="

    useEffect(() => {
        const fetchHighlights = async() => {
          setLoading(true);
          const res = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${token}`);
          setHighlights(res.data.response);
          setLoading(false);
        }
    
        fetchHighlights();
      }, []);

      return { highlights, loading }
}

export default useAPISoccer