const userController = require('../src/controllers/user.controller');
const userService = require('../src/services/user.service');

jest.mock('../src/services/user.service');

describe('UserController', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        name: 'Juan',
        email: 'juan@example.com',
        type: 'admin',
        password: 'secret123'
      }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('createUser debe llamar a userService.create y retornar el usuario', () => {
    const mockUser = { id: 1, ...req.body };
    userService.create.mockReturnValue(mockUser);

    userController.createUser(req, res);

    expect(userService.create).toHaveBeenCalledWith({
      name: 'Juan',
      email: 'juan@example.com',
      type: 'admin',
      password: 'secret123'
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockUser);
  });

  test('listUser debe retornar todos los usuarios', () => {
    const mockUsers = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Luis' }
    ];

    userService.findAll.mockReturnValue(mockUsers);

    userController.listUser(req, res);

    expect(userService.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockUsers);
  });

  test('deleteUser debe eliminar un usuario por ID', () => {
    const mockUsers = [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Luis' }
    ];

    // El usuario con ID 1 se elimina
    const updatedUsers = [{ id: 2, name: 'Luis' }]; 

    userService.deleteById.mockReturnValue(updatedUsers);

    userController.deleteUser(req, res);

    expect(userService.deleteById).toHaveBeenCalledWith('1'); // El ID debe ser '1'
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(updatedUsers); // Devuelve el arreglo actualizado

  });

  
  test('updateUser debe actualizar un usuario por ID', () => {
    const mockUsers = updatedUser = { id: 1, name: 'Ana Actualizada', email: 'ana_updated@gmail.com' };
    userService.updateById.mockReturnValue(mockUsers);
    
    userController.UpdateUser(req, res);

    expect(userService.updateById).toHaveBeenCalled(1, {
      name: 'Juan',
      email: 'juan@gmail.com',
      type: 'admin',
      password: 'secret123'
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(mockUsers);
  });

});
