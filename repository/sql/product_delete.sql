DECLARE @isDeleted INT

IF EXISTS(SELECT * FROM Product WHERE Id=@id)
    BEGIN
        IF((SELECT COUNT(O.Id) FROM OrderItem O LEFT JOIN Product P ON O.ProductId = P.Id WHERE P.Id=@id) = 0)
            BEGIN
                DELETE FROM Product WHERE Id=@id
                SET @isDeleted = 2
            END
        ELSE
            BEGIN
                SET @isDeleted = 1
            END			
    END
ELSE
    BEGIN
        SET @isDeleted = 0
    END
SELECT @isDeleted AS 'returnValue'