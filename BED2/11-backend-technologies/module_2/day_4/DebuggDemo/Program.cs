using System.Globalization;

namespace Debugging
{
    class Program
    {
        static void Main(string[] args)
{
        try
        {
            //Code
            int[] numbers = new int[5];
            numbers[6] = 600;
        }
        catch(IndexOutOfRangeException e)
            {
                System.Console.WriteLine("Haha! First!");
            }
        catch (Exception e) when (e.GetType().ToString() == "System.IndexOutOfRangeException")
        {
            //Error handling code
            Console.WriteLine("Error, Index Out of range");
        }
}
    }

    //Custom Exception class
    public class AgeIsLowException : Exception  //Derives from Exception class
    {
        //Implements base class
        public AgeIsLowException(string message) : base(message)
        { }
    }
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }

        public Person(string fname, string lname, DateTime bday)
        {
            this.FirstName = fname;
            this.LastName = lname;
            this.Age = this.CalculateAge(bday);
        }

        private int CalculateAge(DateTime birthday)
        {
            int calculatedAge = DateTime.Now.Year - birthday.Year;

            if (calculatedAge >= 18)
            {
                Console.WriteLine("Person is of age.");
            }
            else
            {
                throw new AgeIsLowException("Person is underage");
            }
            return calculatedAge;
        }
    }
}