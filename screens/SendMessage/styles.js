import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listItemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listInfo: {
    flex: 1,
  },
  listName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  expandButton: {
    padding: 10,
    marginRight: 5,
  },
  expandButtonText: {
    fontSize: 16,
    color: '#666',
  },
  contactsContainer: {
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginLeft: 35,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '500',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  selectedList: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3',
  },
  selectedContact: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3',
  },
  noListsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  messageContainer: {
    flex: 1,
    padding: 20,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  messageList: {
    flex: 1,
    marginBottom: 80,
  },
  messageItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  confirmationContainer: {
    flex: 1,
    padding: 20,
  },
  confirmationBody: {
    flex: 1,
    marginBottom: 80,
  },
  confirmationSection: {
    marginBottom: 20,
  },
  listsContainer: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
    marginBottom: 10,
  },
  listScroll: {
    flex: 1,
  },
  selectedListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  totalContacts: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  messageBox: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
    maxHeight: 150,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  automatedNote: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 20,
    fontStyle: 'italic'
  },
});