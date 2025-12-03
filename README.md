# 🚀 Dijkstra's Algorithm – Shortest Path Routing Visualization

This project implements **Dijkstra’s Algorithm** to compute the **shortest path between nodes** in a network.  
It includes path visualization, distance calculation, and routing simulation.

---

## 📌 Features

- Computes the **shortest path** from a source node to all other nodes  
- Uses **connection** and **weight matrices**  
- Provides an **interactive visualization interface**  
- Implements the classic **greedy approach**  
- Includes example input/output for clarity  
- Useful for **routing**, **robot path planning**, **network simulation**, and more

---

## 📘 Background

Dijkstra’s Algorithm (1959) solves the **single-source shortest path** problem for graphs with **non-negative weights**.

This implementation follows the methodology:

- Build adjacency/weight matrices  
- Select source & destination  
- Update distances using relaxation  
- Construct shortest path table  

---

## 📐 Methodology

### Algorithm Flow

1. Input number of nodes  
2. Create **connection matrix** and **weight matrix**  
3. Select **source** and **destination**  
4. Compute minimum distances  
5. Construct the shortest path  

---

## 🧪 Example

### **Input**

source = 0
V = 5
edges = [
[0, 1, 4],
[0, 2, 8],
[1, 4, 6],
[2, 3, 2],
[3, 4, 10]
]


### **Output**


### **Shortest Paths**

- 0 → 1 (cost 4)  
- 0 → 2 (cost 8)  
- 0 → 2 → 3 (cost 10)  
- 0 → 1 → 4 (cost 10)

---

## 🎯 Applications

- Routing systems (network packet forwarding)  
- Robot path planning  
- Flight scheduling and travel planning  
- Network traffic optimization  
- Interactive shortest-path visualization  
- File server placement optimization  

---

## ⚠️ Limitations

- Cannot handle **negative edge weights**  
- Performs a **blind search**, which may be slower on very large graphs  

---

## 📊 Technologies Used

- **MATLAB** for simulation and visualization  

---

## 📁 Suggested Project Structure


---

## 🧠 Conclusion

This project demonstrates how to calculate the **shortest path** and **minimum distance** using Dijkstra’s Algorithm.  
The algorithm repeatedly selects the node with the smallest tentative distance, eventually constructing the optimal route.


## 🙏 Acknowledgments

- Mr. Vimal Kumar, Assistant Professor, Computer Science Department


## 📚 References

- GeeksforGeeks – Dijkstra’s Algorithm  
- Wikipedia – Dijkstra’s Algorithm  
- Computer Networks by Andrew S. Tanenbaum  
- Kurose & Ross – Computer Networking  


