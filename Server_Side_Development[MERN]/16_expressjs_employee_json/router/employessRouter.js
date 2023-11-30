// Import the Express framework
const express = require('express');

// Create an Express router
const router = express.Router();

// Define a model for employees
class Employee {
    constructor(id, firstName, lastName, email, gender, ipAddress) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.ipAddress = ipAddress;
    }

    // Convert the employee object to JSON
    to_json() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            gender: this.gender,
            ipAddress: this.ipAddress,
        };
    }
}

// Create an empty array to store all employees
const employees = [{ "id": "h04oc", "first_name": "Amos", "last_name": "Lambird", "email": "alambird0@wsj.com", "gender": "Non-binary", "ip_address": "204.172.42.224" },
    { "id": "a8ocb", "first_name": "Lucian", "last_name": "Hundal", "email": "lhundal1@hugedomains.com", "gender": "Male", "ip_address": "18.73.222.39" },
    { "id": "c19kz", "first_name": "La verne", "last_name": "Donovin", "email": "ldonovin2@ow.ly", "gender": "Female", "ip_address": "176.84.119.240" },
    { "id": "j1dec", "first_name": "Salomone", "last_name": "Wattisham", "email": "swattisham3@theglobeandmail.com", "gender": "Male", "ip_address": "233.161.56.154" },
    { "id": "z3fhu", "first_name": "Hyman", "last_name": "Peete", "email": "hpeete4@parallels.com", "gender": "Male", "ip_address": "202.59.83.158" },

];

// GET all employees
router.get('/employees', (req, res) => {
    // Send the list of all employees as JSON
    res.status(200).json({ employees });
});

// GET a single employee by ID
router.get('/employees/:employeeId', (req, res) => {
    // Get the employee ID from the request
    const employeeId = req.params.employeeId;

    // Find the employee with the given ID
    const employee = employees.find((employee) => employee.id === employeeId);

    // If the employee is not found, return a 404 error
    if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }

    // Send the employee object as JSON
    res.status(200).json({ employee });
});

// Create a new employee
router.post('/employees', (req, res) => {
    // Get the employee data from the request body
    const { firstName, lastName, email, gender, ipAddress } = req.body;

    // Create a new employee object
    const newEmployee = new Employee(employees.length + 1, firstName, lastName, email, gender, ipAddress);

    // Add the new employee to the list of all employees
    employees.push(newEmployee);

    // Send the new employee object as JSON
    res.status(201).json({ employee: newEmployee });
});

// Update an existing employee by ID
router.put('/employees/:employeeId', (req, res) => {
    // Get the employee ID from the request
    const employeeId = req.params.employeeId;

    // Find the employee with the given ID
    const employee = employees.find((employee) => employee.id === employeeId);

    // If the employee is not found, return a 404 error
    if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }

    // Update the employee data from the request body
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.email = req.body.email;
    employee.gender = req.body.gender;
    employee.ipAddress = req.body.ipAddress;

    // Update the employee in the list of all employees
    employees[employees.indexOf(employee)] = employee;

    // Send the updated employee object as JSON
    res.status(200).json({ employee });
});

// Delete an existing employee by ID
router.delete('/employees/:employeeId', (req, res) => {
    // Get the employee ID from the request
    const employeeId = req.params.employeeId;

    // Find the employee with the given ID
    const employee = employees.find((employee) => employee.id === employeeId);

    // If the employee is not found, return a 404 error
    if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
    }

    // Remove the employee from the list of all employees
    employees.splice(employees.indexOf(employee), 1);

    // Send a JSON message indicating that the employee was deleted successfully
    res.status(200).json({ message: 'Employee deleted successfully' });
});

// Export the router
module.exports = router;



/*const express = require('express');
const router = express.Router();
let employees = [
    [{ "id": "h04oc", "first_name": "Amos", "last_name": "Lambird", "email": "alambird0@wsj.com", "gender": "Non-binary", "ip_address": "204.172.42.224" },
        { "id": "a8ocb", "first_name": "Lucian", "last_name": "Hundal", "email": "lhundal1@hugedomains.com", "gender": "Male", "ip_address": "18.73.222.39" },
        { "id": "c19kz", "first_name": "La verne", "last_name": "Donovin", "email": "ldonovin2@ow.ly", "gender": "Female", "ip_address": "176.84.119.240" },
        { "id": "j1dec", "first_name": "Salomone", "last_name": "Wattisham", "email": "swattisham3@theglobeandmail.com", "gender": "Male", "ip_address": "233.161.56.154" },
        { "id": "z3fhu", "first_name": "Hyman", "last_name": "Peete", "email": "hpeete4@parallels.com", "gender": "Male", "ip_address": "202.59.83.158" },
        { "id": "y4tju", "first_name": "Tabbatha", "last_name": "Duddell", "email": "tduddell5@cafepress.com", "gender": "Female", "ip_address": "165.178.189.51" },
        { "id": "p79vm", "first_name": "Brit", "last_name": "Bruins", "email": "bbruins6@mlb.com", "gender": "Female", "ip_address": "219.59.116.81" },
        { "id": "v2cxq", "first_name": "Leonie", "last_name": "Wrenn", "email": "lwrenn7@slashdot.org", "gender": "Female", "ip_address": "243.36.251.25" },
        { "id": "d5sza", "first_name": "Jordana", "last_name": "Biasotti", "email": "jbiasotti8@amazon.com", "gender": "Genderqueer", "ip_address": "42.214.18.195" },
        { "id": "r56pm", "first_name": "Gerti", "last_name": "Ventham", "email": "gventham9@people.com.cn", "gender": "Female", "ip_address": "148.121.154.232" },
        { "id": "x0drr", "first_name": "Nettle", "last_name": "Peirone", "email": "npeironea@harvard.edu", "gender": "Female", "ip_address": "116.206.113.64" },
        { "id": "e5tbf", "first_name": "Merna", "last_name": "Olrenshaw", "email": "molrenshawb@howstuffworks.com", "gender": "Female", "ip_address": "104.160.79.140" },
        { "id": "g8ozr", "first_name": "Donny", "last_name": "Poe", "email": "dpoec@europa.eu", "gender": "Female", "ip_address": "109.98.54.72" },
        { "id": "g9njx", "first_name": "Kamila", "last_name": "Dusey", "email": "kduseyd@google.de", "gender": "Female", "ip_address": "48.127.166.33" },
        { "id": "t1bzn", "first_name": "Halley", "last_name": "Raggett", "email": "hraggette@mail.ru", "gender": "Female", "ip_address": "23.150.67.150" },
        { "id": "i8jmv", "first_name": "Zuzana", "last_name": "Baribal", "email": "zbaribalf@etsy.com", "gender": "Female", "ip_address": "111.157.75.169" },
        { "id": "x6bon", "first_name": "Eugenia", "last_name": "Bowers", "email": "ebowersg@kickstarter.com", "gender": "Female", "ip_address": "19.78.136.130" },
        { "id": "q1fyi", "first_name": "Galen", "last_name": "Cotty", "email": "gcottyh@whitehouse.gov", "gender": "Male", "ip_address": "172.127.147.114" },
        { "id": "t1vmr", "first_name": "Evelyn", "last_name": "Dener", "email": "edeneri@slashdot.org", "gender": "Genderqueer", "ip_address": "72.191.254.67" },
        { "id": "d4lmz", "first_name": "Cello", "last_name": "Danilchik", "email": "cdanilchikj@theguardian.com", "gender": "Male", "ip_address": "238.201.130.203" },
        { "id": "t7gag", "first_name": "Zsa zsa", "last_name": "Rockhill", "email": "zrockhillk@xing.com", "gender": "Female", "ip_address": "160.153.223.208" },
        { "id": "a18ka", "first_name": "Alden", "last_name": "Clopton", "email": "acloptonl@delicious.com", "gender": "Male", "ip_address": "8.240.34.85" },
        { "id": "q36ik", "first_name": "Nicky", "last_name": "Tosh", "email": "ntoshm@amazonaws.com", "gender": "Male", "ip_address": "118.49.112.194" },
        { "id": "q7pme", "first_name": "Chanda", "last_name": "MacNeice", "email": "cmacneicen@blogspot.com", "gender": "Female", "ip_address": "131.63.136.64" },
        { "id": "b0sbz", "first_name": "Rice", "last_name": "Pither", "email": "rpithero@dailymotion.com", "gender": "Male", "ip_address": "169.239.145.152" },
        { "id": "x09qn", "first_name": "Delainey", "last_name": "Vaggers", "email": "dvaggersp@angelfire.com", "gender": "Male", "ip_address": "19.215.99.200" },
        { "id": "a62ll", "first_name": "Vick", "last_name": "Godbolt", "email": "vgodboltq@ow.ly", "gender": "Male", "ip_address": "45.160.36.112" },
        { "id": "n6bpg", "first_name": "Barnard", "last_name": "Vanyard", "email": "bvanyardr@si.edu", "gender": "Male", "ip_address": "105.3.55.249" },
        { "id": "a7gim", "first_name": "Cindie", "last_name": "Menhenitt", "email": "cmenhenitts@google.co.jp", "gender": "Female", "ip_address": "102.24.90.223" },
        { "id": "t3vzw", "first_name": "Jeniffer", "last_name": "Nourse", "email": "jnourset@myspace.com", "gender": "Female", "ip_address": "87.19.184.199" },
        { "id": "c11sz", "first_name": "Bria", "last_name": "Kimbley", "email": "bkimbleyu@exblog.jp", "gender": "Female", "ip_address": "5.5.29.228" },
        { "id": "c2dvk", "first_name": "Cordi", "last_name": "Bottrill", "email": "cbottrillv@patch.com", "gender": "Non-binary", "ip_address": "35.188.41.207" },
        { "id": "h9iik", "first_name": "Hobard", "last_name": "Ohms", "email": "hohmsw@flavors.me", "gender": "Male", "ip_address": "191.255.176.38" },
        { "id": "w23xe", "first_name": "Harris", "last_name": "Reskelly", "email": "hreskellyx@youtube.com", "gender": "Male", "ip_address": "177.164.170.118" },
        { "id": "o5swv", "first_name": "Hermine", "last_name": "Sikorsky", "email": "hsikorskyy@cnbc.com", "gender": "Female", "ip_address": "219.10.41.183" },
        { "id": "m5aci", "first_name": "Eduardo", "last_name": "Meaker", "email": "emeakerz@seesaa.net", "gender": "Male", "ip_address": "229.116.78.88" },
        { "id": "u25nj", "first_name": "Salmon", "last_name": "Morhall", "email": "smorhall10@hud.gov", "gender": "Genderqueer", "ip_address": "154.86.13.255" },
        { "id": "s1lmm", "first_name": "Myra", "last_name": "Luto", "email": "mluto11@lulu.com", "gender": "Female", "ip_address": "133.224.67.162" },
        { "id": "e67xo", "first_name": "Reidar", "last_name": "Edsall", "email": "redsall12@techcrunch.com", "gender": "Male", "ip_address": "26.88.172.38" },
        { "id": "r3nrt", "first_name": "Paco", "last_name": "Chern", "email": "pchern13@freewebs.com", "gender": "Male", "ip_address": "190.23.120.196" },
        { "id": "c94ca", "first_name": "Anatollo", "last_name": "Courvert", "email": "acourvert14@slashdot.org", "gender": "Male", "ip_address": "33.39.23.233" },
        { "id": "q7bdl", "first_name": "Josee", "last_name": "Lilly", "email": "jlilly15@naver.com", "gender": "Female", "ip_address": "223.44.196.52" },
        { "id": "d72sn", "first_name": "Damaris", "last_name": "Scougall", "email": "dscougall16@yahoo.co.jp", "gender": "Female", "ip_address": "211.22.15.19" },
        { "id": "q5zho", "first_name": "Addison", "last_name": "Coyte", "email": "acoyte17@cafepress.com", "gender": "Male", "ip_address": "7.100.188.115" },
        { "id": "q8fkr", "first_name": "Ezra", "last_name": "Brunesco", "email": "ebrunesco18@liveinternet.ru", "gender": "Male", "ip_address": "252.57.169.214" },
        { "id": "i2sah", "first_name": "Abrahan", "last_name": "McNeish", "email": "amcneish19@statcounter.com", "gender": "Male", "ip_address": "253.191.67.167" },
        { "id": "r49wl", "first_name": "Rockie", "last_name": "Tapson", "email": "rtapson1a@exblog.jp", "gender": "Male", "ip_address": "139.249.254.162" },
        { "id": "y8lzx", "first_name": "Aleksandr", "last_name": "Wilse", "email": "awilse1b@cnbc.com", "gender": "Agender", "ip_address": "43.195.110.89" },
        { "id": "n1wkx", "first_name": "Estevan", "last_name": "Gosenell", "email": "egosenell1c@arizona.edu", "gender": "Male", "ip_address": "183.40.142.201" },
        { "id": "z6gzl", "first_name": "Cookie", "last_name": "Duplan", "email": "cduplan1d@ebay.co.uk", "gender": "Female", "ip_address": "241.139.109.241" },
        { "id": "f23gg", "first_name": "Nerita", "last_name": "Beake", "email": "nbeake1e@nytimes.com", "gender": "Female", "ip_address": "230.53.228.218" },
        { "id": "t0dtc", "first_name": "Jo-ann", "last_name": "Ballam", "email": "jballam1f@themeforest.net", "gender": "Female", "ip_address": "20.218.30.49" },
        { "id": "u3jmb", "first_name": "Lilllie", "last_name": "Durnford", "email": "ldurnford1g@bizjournals.com", "gender": "Female", "ip_address": "173.204.4.136" },
        { "id": "w5ehn", "first_name": "Tully", "last_name": "Molyneaux", "email": "tmolyneaux1h@utexas.edu", "gender": "Male", "ip_address": "207.140.78.65" },
        { "id": "a5zms", "first_name": "Gaile", "last_name": "Adnam", "email": "gadnam1i@fc2.com", "gender": "Male", "ip_address": "159.108.172.153" },
        { "id": "w8bmy", "first_name": "Nelson", "last_name": "Usher", "email": "nusher1j@mtv.com", "gender": "Male", "ip_address": "83.168.86.19" },
        { "id": "r4afm", "first_name": "Janetta", "last_name": "Hurdidge", "email": "jhurdidge1k@house.gov", "gender": "Female", "ip_address": "75.227.198.72" },
        { "id": "s1bhm", "first_name": "Bianca", "last_name": "Pollendine", "email": "bpollendine1l@slashdot.org", "gender": "Female", "ip_address": "114.116.88.110" },
        { "id": "z2krt", "first_name": "Harriett", "last_name": "Raigatt", "email": "hraigatt1m@apache.org", "gender": "Female", "ip_address": "164.93.108.232" },
        { "id": "l9kxo", "first_name": "Gerrie", "last_name": "Yanshin", "email": "gyanshin1n@guardian.co.uk", "gender": "Female", "ip_address": "137.50.242.22" },
        { "id": "d79oz", "first_name": "Kellby", "last_name": "Hinken", "email": "khinken1o@hc360.com", "gender": "Male", "ip_address": "197.235.78.13" },
        { "id": "w3vkx", "first_name": "Lolly", "last_name": "Finding", "email": "lfinding1p@w3.org", "gender": "Female", "ip_address": "53.230.124.199" },
        { "id": "b2bad", "first_name": "Trefor", "last_name": "Alans", "email": "talans1q@list-manage.com", "gender": "Male", "ip_address": "70.227.150.205" },
        { "id": "j6irf", "first_name": "Vyky", "last_name": "Baldacchino", "email": "vbaldacchino1r@latimes.com", "gender": "Female", "ip_address": "135.230.89.64" },
        { "id": "k5ajg", "first_name": "Xena", "last_name": "Reisk", "email": "xreisk1s@oakley.com", "gender": "Female", "ip_address": "35.122.71.197" },
        { "id": "z5euf", "first_name": "Chrissie", "last_name": "O'Caine", "email": "cocaine1t@indiegogo.com", "gender": "Polygender", "ip_address": "147.53.97.38" },
        { "id": "g2mhj", "first_name": "Griselda", "last_name": "Guerreau", "email": "gguerreau1u@geocities.jp", "gender": "Female", "ip_address": "30.150.45.50" },
        { "id": "t5fsf", "first_name": "Lazaro", "last_name": "Coast", "email": "lcoast1v@cdc.gov", "gender": "Male", "ip_address": "117.115.65.100" },
        { "id": "c9mba", "first_name": "Gwenni", "last_name": "Kimbley", "email": "gkimbley1w@wikimedia.org", "gender": "Female", "ip_address": "199.147.123.227" },
        { "id": "d6abz", "first_name": "Terrie", "last_name": "Oxby", "email": "toxby1x@gravatar.com", "gender": "Female", "ip_address": "123.104.234.61" },
        { "id": "z6nmz", "first_name": "Arney", "last_name": "Sanger", "email": "asanger1y@ox.ac.uk", "gender": "Male", "ip_address": "16.97.32.35" },
        { "id": "h88nj", "first_name": "Oby", "last_name": "Nissle", "email": "onissle1z@mashable.com", "gender": "Male", "ip_address": "81.106.43.235" },
        { "id": "q65vq", "first_name": "Hagen", "last_name": "Oliffe", "email": "holiffe20@desdev.cn", "gender": "Male", "ip_address": "187.75.162.176" },
        { "id": "i69my", "first_name": "Biddie", "last_name": "Moohan", "email": "bmoohan21@webnode.com", "gender": "Female", "ip_address": "108.186.221.35" },
        { "id": "z1hwq", "first_name": "Thorndike", "last_name": "Kingsman", "email": "tkingsman22@ox.ac.uk", "gender": "Male", "ip_address": "71.92.222.31" },
        { "id": "y2hul", "first_name": "Bjorn", "last_name": "Goucher", "email": "bgoucher23@networkadvertising.org", "gender": "Male", "ip_address": "41.75.134.5" },
        { "id": "a3ipo", "first_name": "Allina", "last_name": "Bricham", "email": "abricham24@shop-pro.jp", "gender": "Female", "ip_address": "209.236.69.247" },
        { "id": "k2fhi", "first_name": "Silvester", "last_name": "Clell", "email": "sclell25@yellowpages.com", "gender": "Male", "ip_address": "45.128.119.8" },
        { "id": "h8mrl", "first_name": "Malina", "last_name": "Pesik", "email": "mpesik26@cnet.com", "gender": "Female", "ip_address": "184.22.18.3" },
        { "id": "l50mp", "first_name": "Minor", "last_name": "Audus", "email": "maudus27@posterous.com", "gender": "Male", "ip_address": "45.140.45.142" },
        { "id": "u8ycq", "first_name": "Ludvig", "last_name": "MacPhaden", "email": "lmacphaden28@blogtalkradio.com", "gender": "Male", "ip_address": "131.51.203.213" },
        { "id": "o6jtk", "first_name": "Lutero", "last_name": "Borgnol", "email": "lborgnol29@sun.com", "gender": "Male", "ip_address": "242.202.249.154" },
        { "id": "b7ftg", "first_name": "Iolande", "last_name": "Kennady", "email": "ikennady2a@ebay.com", "gender": "Female", "ip_address": "23.211.247.68" },
        { "id": "d85cr", "first_name": "Irena", "last_name": "Croisier", "email": "icroisier2b@homestead.com", "gender": "Female", "ip_address": "205.86.205.151" },
        { "id": "o9ttg", "first_name": "Virgie", "last_name": "Brimacombe", "email": "vbrimacombe2c@edublogs.org", "gender": "Male", "ip_address": "128.202.225.99" },
        { "id": "d8qne", "first_name": "Darb", "last_name": "Mc Comb", "email": "dmccomb2d@dagondesign.com", "gender": "Male", "ip_address": "121.173.134.203" },
        { "id": "r1uxg", "first_name": "Kennedy", "last_name": "Leveret", "email": "kleveret2e@goodreads.com", "gender": "Male", "ip_address": "87.188.105.224" },
        { "id": "y7fxq", "first_name": "Tobin", "last_name": "Lammerich", "email": "tlammerich2f@jugem.jp", "gender": "Male", "ip_address": "36.254.239.147" },
        { "id": "i1mub", "first_name": "Paolina", "last_name": "Costain", "email": "pcostain2g@bandcamp.com", "gender": "Female", "ip_address": "184.108.12.87" },
        { "id": "k0sss", "first_name": "Anatol", "last_name": "Lorant", "email": "alorant2h@mayoclinic.com", "gender": "Male", "ip_address": "9.170.206.227" },
        { "id": "k3qbr", "first_name": "Blake", "last_name": "Loads", "email": "bloads2i@sitemeter.com", "gender": "Male", "ip_address": "90.242.62.18" },
        { "id": "d7xbc", "first_name": "Hamid", "last_name": "Kettow", "email": "hkettow2j@reverbnation.com", "gender": "Male", "ip_address": "15.85.45.112" },
        { "id": "g59rp", "first_name": "Cammie", "last_name": "Reeken", "email": "creeken2k@gov.uk", "gender": "Female", "ip_address": "80.7.77.148" },
        { "id": "q6jgp", "first_name": "Addie", "last_name": "Persian", "email": "apersian2l@lulu.com", "gender": "Female", "ip_address": "218.164.214.141" },
        { "id": "c8sjc", "first_name": "Ewen", "last_name": "Kingaby", "email": "ekingaby2m@marriott.com", "gender": "Male", "ip_address": "180.226.149.118" },
        { "id": "w2bmf", "first_name": "Robb", "last_name": "Glancy", "email": "rglancy2n@squarespace.com", "gender": "Male", "ip_address": "82.193.89.144" },
        { "id": "w4cyc", "first_name": "Corney", "last_name": "Allflatt", "email": "callflatt2o@pcworld.com", "gender": "Non-binary", "ip_address": "99.233.216.39" },
        { "id": "j6rri", "first_name": "Kalle", "last_name": "Boame", "email": "kboame2p@yolasite.com", "gender": "Genderfluid", "ip_address": "144.191.86.60" },
        { "id": "i76fu", "first_name": "Jacynth", "last_name": "Sergant", "email": "jsergant2q@home.pl", "gender": "Female", "ip_address": "218.21.139.32" },
        { "id": "j1uvp", "first_name": "Wye", "last_name": "Throssell", "email": "wthrossell2r@nhs.uk", "gender": "Non-binary", "ip_address": "40.130.71.101" }
    ]
]


    @usage  :   GET All employees
    @URL    :   HTTP://'127.0.0.1:5000/api/employees
    @fileds :   no-fields
    @Methods:   GET
    @Access :   public

//All Employees Details get 
router.get('/employees', (requst, response) => {
    response.status(200).json(employees);
})


    @usage  :   GET single employee
    @URL    :   HTTP://'127.0.0.1:5000/api/employees:emp_id
    @fileds :   no-fields
    @Methods:   GET
    @Access :   public

//All Employees Details get 
router.get('/employees/:emp_id', (requst, response) => {
    let employeeId = requst.params.emp_id;
    let selectedEmployee = employee.find(employee => employee.id === employeeId);
    response.status(200).json(selectedEmployee);
})


    @usage  :   create an employee
    @URL    :   HTTP://'127.0.0.1:5000/api/employees
    @fileds :   first_name,lst_name,email,gender,ip_address
    @Methods:   post
    @Access :   public

router.post('/employees', (requst, response) => {
    //let{first_name,lst_name,email,gender,ip_address}=requst.body;
    let newEmployee = {
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        ip_address: request.body.ip_address,
    }
    response.status(200).json({ employee: newEmployee })
})


module.exports = router;
*/