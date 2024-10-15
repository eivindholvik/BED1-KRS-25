# Activity 1: "Superhero Profiles" (Object Literal and Accessing Properties)

Create superhero profiles, explore their powers, and update their arch-nemesis.

## Instructions:

### Create the Object:

Create an object literal called `superhero` that stores:
- `heroName`: A string for the superhero’s name.
- `alias`: A string for their secret identity.
- `powers`: An array of at least three powers (strings).
- `originStory`: A short string explaining how they got their powers.
- `archNemesis`: A string for the name of their main villain.
- `greet`: A method that returns a string introducing the superhero by name and summarizing their origin story.

### Access Properties:

Use both dot notation and bracket notation to access and log:
- The superhero’s name and alias.
- Their first power in the powers array.
- The arch-nemesis.
- Call the `greet()` method to introduce the superhero.

### Using `Object.keys()`:

Use `Object.keys()` to list all the property names in the `superhero` object.  
Loop through the keys and display both the key names and values in the console.  
You should also format it to display:

```javascript
Key: heroName, Value: Superman
```

### Modify the Object:

1. Create a function called `changeNemesis` that takes in a string and updates the `archNemesis` property. Test it by changing the nemesis.
2. Add a new power to the powers array using `superhero.powers.push('newPower')`.

### Challenge:

**Create a battle simulation:**  
Write a method `battle()` that randomly chooses one of the superhero’s powers and displays a message like:

```javascript
superhero.battle(); 
// Output: "Superman uses heat vision to defeat Lex Luthor!"
```
### Bonus

Add a method called `revealIdentity()` that reveals their alias only if a secret code is provided.