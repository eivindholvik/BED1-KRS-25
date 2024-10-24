### Task Introduction (class diagram activity):

Your task is to draw a **class diagram** based on the summary that follows the scene below. Use **draw.io** or any other preferred diagram tool. Focus on the attributes, methods, and associations between **Vehicles**, **Dealerships**, and **Suppliers**. The scenario is set in the new *24 Jump Street* movie, where you, the developer, are hired by Ice Cube’s character, Captain Dickson, to help them track down stolen cars using their VIN numbers.

---

### Scenario:  
In *24 Jump Street*, Captain Dickson (played by Ice Cube) recruits a developer (that's you!) to help track stolen cars and bust a criminal operation. Your role? Help the Jump Street unit crack the case by designing a system to track these vehicles through dealerships and suppliers. With stolen cars flooding the market, it's up to you to map out how to trace each vehicle from the moment it's stolen to when it hits the lot.

---

### Scene: Stakeout at a greasy diner, late at night. Captain Dickson (Ice Cube) is sitting across the table from you, the student. He’s sipping coffee, clearly frustrated.

**Captain Dickson**:  
(*slams his coffee cup down*)  
"Alright, listen up! This ain't your average stakeout. We ain't just tailing some two-bit car thieves here—nah, this goes deeper. *Way* deeper. We're talking about an entire stolen car operation—dealerships, suppliers, VIN numbers. But we're missing one thing…"

(*he glares at you like you’re supposed to know the answer*)

**You**:  
(*nervous*)  
"A uh… proper model?"

**Captain Dickson**:  
"Exactly, a damn model! Finally, someone with some brains around here. See, we got vehicles bein' stolen, but we don’t know where they’re goin’. These criminals? They’re smart. They’re funneling stolen cars into legit dealerships, then pushing them out again. And I need you to help me track ‘em."

(*He points at you, dead serious*)

"You’re the dev now! Congratulations, welcome to the team. Your job is simple: *infiltrate the dealers, find the suppliers.*"

(*He leans forward, lowering his voice dramatically*)

"We got one key to crackin’ this wide open: VIN numbers. Every car’s got one—a Vehicle Identification Number. That’s how we track the cars. You find the VIN, and boom—we know it’s stolen. But it don’t stop there. We need to know where these cars are **right now**, which means trackin’ which dealership they’re with. Every car is either on a lot or in transit, so each one’s got a `dealershipId`. Find the dealer, find the car."

(*He looks out the window dramatically, then back at you*)

"But what we really want? The big fish. The suppliers. Cars don’t just show up at a dealership outta nowhere. Someone’s *supplying* these vehicles. That’s where the `supplierId` comes in. If we can link these stolen cars to their suppliers, we’ve got a shot at nailing the whole operation."

(*He pauses for dramatic effect*)

"Now, we ain't playing around here. Each car is tied to *exactly one* supplier, got it? And they don’t move from one to another. But the dealerships? Those are fluid. Cars come in, cars go out. Some stay, some leave. You see a `dealershipId`? That’s where the car is, or was."

(*He jabs his finger on the table for emphasis*)

"We're buildin' a system, a *model*, to track every damn one of these cars. You’re gonna help me connect these dots. Track the vehicles by `vehicleId`—that’s the VIN—and figure out where they are using the `dealershipId` and `supplierId`. We know who’s supplying what and who's dealing what."

(*Leaning back, he smirks*)

"So you think you can handle this, rookie? Or am I gonna have to find another dev who ain't too busy playing **League of Legends** in their momma’s basement?"

(*He lets out a low chuckle*)

"You crack this case wide open, and maybe—*maybe*—I’ll let you ride shotgun on the next one. But for now, *get to work*."

---

(*Your job is to model the flow of these vehicles between suppliers and dealerships.* Use the summary below to guide you in drawing the class diagram.)



## Summary for Class Diagram

In the **used car market**, we are tracking the flow of vehicles between suppliers and dealerships. The core entities involved are **Vehicles**, **Dealerships**, and **Suppliers**. Each entity has specific attributes and methods that help manage and track the lifecycle of vehicles.

1. **Vehicle**: 
   - A vehicle has a unique `vehicleId`, which is a **String** representing the VIN number used to uniquely identify the vehicle.
   - The vehicle has other attributes, including `make` and `model`, both of which are **Strings** representing the manufacturer and specific type of vehicle (e.g., Toyota Camry).
   - Additional details include `year` (a **Number**), `price` (a **Number** representing the cost), `mileage` (a **Number**), and `condition` (a **String** indicating the state of the vehicle, e.g., "Excellent").
   - **Vehicles are supplied by exactly one supplier** (composition). The vehicle must have a `supplierId`, which is a **Number** that identifies the supplier.
   - **Vehicles are optionally part of a dealership's inventory** (aggregation). The `dealershipId` is a **Number** that starts as `null` until the vehicle is supplied to a dealership. When the vehicle is supplied, the `supplyDate` (a **Date**) records when this occurred.

   **Methods**:
   - `calculateDepreciation()`: Calculates how much value the vehicle has lost over time based on its `year` and `condition`.
   - `getVehicleDetails()`: Returns a summary of the vehicle’s details (e.g., make, model, price) as a formatted string for easy display.

2. **Dealership**: 
   - A dealership holds an **inventory of vehicles**. The `inventory` consists of a list of `Vehicle` objects. 
   - The dealership has a unique `dealershipId` (a **Number**), a `name` (a **String** representing the dealership's name), and a `location` (a **String**).
   
   **Methods**:
   - `addVehicle(vehicle: Vehicle)`: Adds a vehicle to the dealership's inventory and assigns the `dealershipId` to the vehicle to show it belongs to the dealership.
   - `removeVehicle(vehicle: Vehicle)`: Removes a vehicle from the dealership's inventory and clears the `dealershipId` from the vehicle.
   - `listAvailableVehicles()`: Provides a list of all vehicles currently in the dealership's inventory.

3. **Supplier**: 
   - A supplier manages **vehicle stock** and provides vehicles to dealerships.
   - Each supplier has a unique `supplierId` (a **Number**), a `supplierName` (a **String**), and `contactInfo` (a **String** representing contact details like phone or email).
   
   **Methods**:
   - `supplyVehicle(vehicle: Vehicle, dealership: Dealership)`: Supplies a vehicle to a dealership by updating the `dealershipId` and setting the `supplyDate` on the vehicle.
   - `getAvailableStock()`: Returns a list of vehicles currently available in the supplier's stock that haven't been supplied to a dealership yet.

---

### Key Relationships:
- **Supplier → Vehicle**: **Composition** (vehicles cannot exist without a supplier). Each vehicle is tied to a `supplierId` when created.
- **Dealership → Vehicle**: **Aggregation** (vehicles can exist without a dealership). A vehicle may be supplied to a dealership, and when it is, the `dealershipId` and `supplyDate` are updated.
