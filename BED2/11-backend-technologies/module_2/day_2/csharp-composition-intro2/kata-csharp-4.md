# Heroes with Weapons ⚔️🏹

In the previous activity, heroes could **train** and grow stronger.

Now we will expand the system using **composition**.

Instead of creating new hero types like:

```
SwordWarrior
BowWarrior
FireMage
IceMage
```

We will allow heroes to **have a weapon**.

This lets behaviour vary independently from the hero type.

## Your Task

## 1. Create an interface called `IWeapon`

It should contain:

```csharp
void Attack(string heroName);
```

A weapon knows how to perform an attack.

The hero simply delegates to it.

## 2. Create two weapon classes

### `Sword`

Requirements:

- Implement `IWeapon`
- When `Attack()` is called, print something like:

```
Koba swings a sword!
```

### `Staff`

Requirements:

- Implement `IWeapon`
- When `Attack()` is called, print something like:

```
Nia casts a spell with her staff!
```

## 3. Update the `Hero` class

Modify `Hero` so that:

- It has a property:

```csharp
public IWeapon Weapon { get; set; }
```

- Add a method:

```csharp
public void Attack()
{
    Weapon.Attack(Name);
}
```

Important:

The hero should not know _how_ the weapon attacks.

It only knows:

> “I have something that can attack.”

This is **programming to an abstraction**.

## 4. Update `Mage` and `Warrior`

- Do not hardcode weapon behaviour inside these classes.
- Assign them weapons when they are created.

Example idea (in `Program`):

```csharp
Mage mage = new Mage("Nia");
mage.Weapon = new Staff();

Warrior warrior = new Warrior("Koba");
warrior.Weapon = new Sword();
```

## 5. Test the system

Store heroes in a `List<Hero>`.

Call:

```csharp
hero.Attack();
```

Each hero should attack differently — not because the hero type changed, but because the weapon varies.

# Expected Output (Example)

```
Koba swings a sword!
Nia casts a spell with her staff!
```

# What You Just Did

You:

- Used **composition** (Hero has a Weapon)
- Programmed to an **abstraction** (`IWeapon`)
- Allowed behaviour to vary independently
- Avoided creating unnecessary subclasses

# Why This Matters

Imagine adding:

- Bow
- Dagger
- Axe
- MagicWand

You do not modify `Hero`.
You do not create new hero subclasses.

You extend the system by adding new weapon types.

This follows:

- Favor composition over inheritance
- Open for extension, closed for modification
- Encapsulate what varies (attack behaviour lives inside weapons)

# Reflection Questions

1. Why is it better for `Hero` to depend on `IWeapon` instead of `Sword`?
2. What would happen if `Hero` directly created a `new Sword()` inside its constructor?
3. Which class is responsible for knowing how an attack works?

# Bonus (Optional)

1. Allow the hero to change weapons at runtime:

```csharp
hero.Weapon = new Sword();
hero.Attack();

hero.Weapon = new Staff();
hero.Attack();
```

2. Add a new weapon type without modifying `Hero`.

3. Prevent `Attack()` from crashing if no weapon is assigned.

# Conceptual Shift

Yesterday:

> A Mage is a Hero.

Today:

> A Hero has a Weapon.

Inheritance models identity.
Composition models capability.
