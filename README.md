# path-finding-visualization
This project is a simple web-based simulation of a shortest path algorithm using HTML, CSS, and JavaScript. It visually demonstrates how popular algorithms like **Dijkstra's** or **A\*** find the shortest path from a start node to an end node in a grid-based environment.

## Features:

- **Interactive Grid**: Create your own custom grid by setting width and height to define barriers and obstacles.

- **Start and End Nodes**: Easily set a start and end node on the grid for the algorithm to find the shortest path between them.

- **Algorithm Selection**: Choose from various algorithms, such as _Dijkstra's_, _A*_, or even _Depth-First Search (DFS)_.

- **Visualization**: Watch the algorithm in action as it explores the grid and marks the shortest path after execution.

## Try It Out:

To see this simulation in action, visit the live demo [here](https://shah-codex.github.io/path-finding-visualization/).

## Getting Started:

1. Clone this repository to your local machine or download the ZIP file.

2. Open the `index.html` file in your web browser.

3. Define the start and end nodes on the grid, add barriers, and select the algorithm of your choice.
   - `Double Click` a box on grid to select start node.
   - `Ctrl` + `Double Click` a box on grid to select end node.

4. Add weight nodes on the grid _(optional)_.
   - `Click` a box on grid to set it as weighted node with weight _Infinity_.
   - `Ctrl` + `Click` a box on a grid to set it as weighted node with weight of _5_.

6. Click the "Start" button to watch the algorithm find the shortest path.

## Notations
| Action              | Description                                                    | Bindings                | Color Code  | 
| ------------------- | -------------------------------------------------------------- | ----------------------- | ----------- |
| **Start Node**      | Mark current node as start node                                | `Double Click`          | Red         |
| **End Node**        | Mark current node as end node                                  | `Ctrl` + `Double Click` | Blue        |
| **Infinite Weight** | Mark current node with infinite weight                         | `Click`                 | Black       |
| **5 Unit Weight**   | Mark current node with weight of 5                             | `Ctrl` + `Click`        | Green       |
| **Shortest Path**   | Displays the shortest path after execution of algorithm        | _(no bindings)_         | Yellow      |
| **Visited Nodes**   | Displays all nodes visited during the execution of algorithm   | _(no bindings)_         | Purple      |

## Hosting on a Web Server
1. **Choose a Linux Distribution:**
   - Select a Linux distribution for your web server. Common choices include Ubuntu, CentOS, or Debian.

2. **Install a Web Server:**

   - **For Ubuntu/Debian:**
     - Update the package list: `sudo apt update`
     - Install Apache web server: `sudo apt install apache2`

   - **For CentOS:**
     - Update the package list: `sudo yum update`
     - Install Apache web server: `sudo yum install httpd`

3. **Copy Relevant Files:**

   - Place your website files in the appropriate directory. For Apache, it's usually located in `/var/www/html/`. You can use SCP, FTP, or other methods to transfer your files to the server.
   - ```bash
     sudo cp <path-to-directory>/path-finding-visualizer/* /var/www/html
     ```

4. **Configure Firewall (if necessary):**

   - Open the web server's port (usually port 80) in your firewall to allow incoming HTTP traffic. For example, on Ubuntu, you can use:
     ```bash
     sudo ufw allow 80/tcp
     ```

5. **Start the Web Server Service:**

   - **For Ubuntu/Debian:**
     - Enable Apache to start at boot: `sudo systemctl enable apache2`
     - Start Apache: `sudo systemctl start apache2`

   - **For CentOS:**
     - Enable Apache to start at boot: `sudo systemctl enable httpd`
     - Start Apache: `sudo systemctl start httpd`

6. **Access Your Website:**

   - Open a web browser and enter your server's IP address or domain name. You should see your website.

7. **Optional: Domain Configuration:**

   - If you have a domain name, you can configure your DNS settings to point to your server's IP address.

## Customization:

Feel free to modify the CSS and JavaScript to further customize the appearance and behavior of the simulation to suit your needs.
