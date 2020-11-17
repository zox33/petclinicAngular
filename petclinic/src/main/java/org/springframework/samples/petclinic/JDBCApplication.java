//package org.springframework.samples.petclinic;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//import java.util.Date;
//import java.util.HashSet;
//import java.util.Set;
//
//import org.springframework.samples.petclinic.model.Owner;
//import org.springframework.samples.petclinic.model.Person;
//import org.springframework.samples.petclinic.model.Pet;
//import org.springframework.samples.petclinic.model.PetType;
//
//
//
//public class JDBCApplication {
//
//	public static void main(String[] args) {
//		System.out.println("-------- Test de conexión con MySQL ------------");
//
//		try {
//			Class.forName("com.mysql.cj.jdbc.Driver");
//			} catch (ClassNotFoundException e) {
//			System.out.println("No encuentro el driver en el Classpath");
//			e.printStackTrace();
//			return;
//		}
//
//		System.out.println("Driver instalado y funcionando");
//		Connection connection = null;
//		PreparedStatement pstatement = null;
//		try {
//			
////			Person p1 = new Person("Víctor", "Miranda Alcántara");
////			Date birthDayPet = new Date(1999,12,15);
////			Pet pet1 = new Pet(birthDayPet, new PetType(),null ,null);
////			Set<Pet> mascotas =  new HashSet<Pet>();
////			mascotas.add(pet1);
////			Owner ow = new Owner ("Calle La Montaña","Sevilla","56434463247",mascotas);
////			ow.setFirstName(p1.getFirstName());
////			ow.setLastName(p1.getLastName());
////			pet1.setOwner(ow);
//			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/petclinic?serverTimezone=UTC","root", "root");
//			if (connection != null)
//				System.out.println("Conexión establecida");
//						
////			String queryInsert = "INSERT INTO owners VALUES (?,?,?,?,?,?);";
////			String insertPets = "INSERT INTO pets VALUES (?, '?', '?', ?, ?);";
//
////			pstatement = connection.prepareStatement(queryInsert);
////			
////			pstatement.setInt(1, 11);
////			pstatement.setString(2,ow.getFirstName());
////			pstatement.setString(3,ow.getLastName());
////			pstatement.setString(4,ow.getAddress());
////			pstatement.setString(5,ow.getCity());
////			pstatement.setString(6,ow.getTelephone());
////			pstatement.executeUpdate();
//			
////			String[] newUser = {"Víctor", "Miranda", "41900 ", "Sevilla", "605484373"};
////			
////			String queryInsert = "INSERT INTO owners VALUES (?,?,?,?,?);";
////			pstatement = connection.prepareStatement(queryInsert);
////			for (int i=0;i<newUser.length;i++) {
////				pstatement.setString(i+1, newUser[i]);
////			}
////			pstatement.executeUpdate() ;
//
////			String query = "SELECT * FROM petclinic.owners WHERE FIRST_NAME LIKE ? OR LAST_NAME LIKE ?"; 
////			String query = "SELECT * FROM petclinic.owners WHERE FIRST_NAME=?" ;
////			pstatement = connection.prepareStatement(query);
////			pstatement.setString(1, "%da%");
////			pstatement.setString(2, "%da%");
////		String queryInsert = "INSERT INTO owners VALUES ('Víctor', 'Miranda Alcántara', '41900 C/ La Montaña', 'Camas/Sevilla', '6085555487');";
////		String queryInsertMascota = "INSERT INTO pets VALUES (14, 'Leo', '2000-09-07', 1, 11);";
//
////		String QueryGetMe = "UPDATE owners SET city='Alemania' WHERE id = 11;";
////		statement.executeUpdate(QueryGetMe);
//		
//		//DA
//		
////		if(queryInsert.equalsIgnoreCase("INSERT INTO owners VALUES ('Víctor', 'Miranda Alcántara', '41900 C/ La Montaña', 'Camas/Sevilla', '6085555487');")
////				&& queryInsertMascota.equalsIgnoreCase("INSERT INTO pets VALUES (14, 'Leo', '2000-09-07', 1, 11);")) {
////			
////		}else {
////			statement.executeUpdate(queryInsert);
////			statement.executeUpdate(queryInsertMascota);
////		}
////		
//		
////		while(rs.next()) {
////			int id = rs.getInt("id");
////			String first_name = rs.getString("first_name");
////			String last_name = rs.getString("last_name");
////			String address = rs.getString("address");
////			String city = rs.getString("city");
////			String telephone = rs.getString("telephone");
////			System.out.println(id +"\t"+ first_name+"\t"+last_name+"\t"+address+"\t"+city+"\t"+telephone);
////			
////		}
////		
////		rs.close();
//		    
//		} catch (SQLException e) {
//			System.out.println("Connection Failed! Check output console");
//			e.printStackTrace();
//			return;
//		} finally {
//			try {
//				if(pstatement != null)
//					connection.close();
//			} catch (SQLException se) {
//		    	  
//		    }
//		    try {
//		        if(connection != null)
//		            connection.close();
//		    } catch (SQLException se) {
//		         	se.printStackTrace();
//		    }
//		}
//		
//		
//		
//	}
//	
//}
