using DependencyInjection.Contracts;

namespace DependencyInjection.Services;

public class MessageService : IMessageService
{
    private int Count = 0;
    public ILoggerService _loggerService;

    public MessageService(ILoggerService loggerService)
    {
        _loggerService = loggerService;
    }

    public void Send(string message)
    {
        Console.WriteLine($"This email has been sent!: {message}");

        Count++;
        
        Console.WriteLine($"Number of times this has been done for this single instance: {Count}");

        _loggerService.LogSendedData(message);
    }
}