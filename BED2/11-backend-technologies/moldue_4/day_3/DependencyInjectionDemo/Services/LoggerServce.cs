using DependencyInjection.Contracts;

namespace DependencyInjection.Services;

public class LoggerService: ILoggerService
{
    public string LogSendedData(string message)
    {
        Console.WriteLine($"The message {message} has been logged");
        return message;
    }
}