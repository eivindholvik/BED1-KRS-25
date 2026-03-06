using DependencyInjection.Contracts;

namespace DependencyInjection.Services;

public class NotificationService: INotificationService
{
    public IMessageService _messageService;

    public NotificationService(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public void Notify(string message)
    {
        _messageService.Send(message);
    }
    
}